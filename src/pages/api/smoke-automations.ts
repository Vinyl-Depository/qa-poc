import path from 'path';

import fs from 'fs-extra';
import { NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

import { ISmokeAutomationsRequest } from '@/interfaces/requests/smoke-automations';
import { ISmokeAutomationsResponse } from '@/interfaces/responses/smoke-automations';
import { SMOKE_ELEMENTS } from '@/models/smoke-elements';
import { getRandomInt } from '@/utils/random-integer';
import { initSmokeResources } from '@/utils/init-resources';
import type { ISmokeData } from '@/interfaces/smoke-data';

export default async function handler(
	req: ISmokeAutomationsRequest,
	res: NextApiResponse<ISmokeAutomationsResponse>,
) {
	if (req.method === 'GET') {
		const templatePath = path.join(process.cwd(), 'public', 'template.html');

		try {
			await initSmokeResources();

			const browser = await puppeteer.launch();
			const page = await browser.newPage();

			await page.goto(templatePath);

			const smokeElementsTags = SMOKE_ELEMENTS.join(',');
			const smokeElements = await page.$$(smokeElementsTags);
			const smokeIds = smokeElements.map(() => getRandomInt(1000, 9999));

			const smokeScreenshotsPromises = smokeElements.map((smokeElement, index) => {
				const smokeId = `${smokeIds[index]}`;

				return smokeElement.screenshot({
					path: path.join(
						process.cwd(),
						'resources',
						'screenshots',
						'smoke-elements',
						`${smokeId}.png`,
					),
				});
			});

			const smokeData: ISmokeData = {};

			for (const [smokeElementIndex, smokeElementValie] of smokeElements.entries()) {
				const smokeId = `${smokeIds[smokeElementIndex]}`;
				const elementTag = await (await smokeElementValie.getProperty('tagName')).jsonValue<string>();

				smokeData[smokeId] = elementTag.toLowerCase();
			}

			const smokeDataJsonPath = path.join(process.cwd(), 'resources', 'data', 'smoke.json');

			await Promise.all([
				...smokeScreenshotsPromises,
				fs.outputFile(smokeDataJsonPath, JSON.stringify(smokeData)),
			]);

			await browser.close();
		} catch {
			res.status(500).send({
				success: false,
				message: 'Failed to create smoke automations',
			});

			return;
		}

		res.status(200).send({
			success: true,
			message: 'Successfully fulfilled API call',
		});

		return;
	}

	res.status(404).send({
		success: false,
		message: 'Invalid API call',
	});

	return;
}
