import path from 'path';

import { NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

import { ISmokeAutomationsRequest } from '@/interfaces/requests/smoke-automations';
import { ISmokeAutomationsResponse } from '@/interfaces/responses/smoke-automations';
import { SMOKE_ELEMENTS } from '@/models/smoke-elements';

export default async function handler(
	req: ISmokeAutomationsRequest,
	res: NextApiResponse<ISmokeAutomationsResponse>,
) {
	if (req.method === 'GET') {
		const templatePath = path.join(process.cwd(), 'public', 'template.html');

		try {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();

			await page.goto(templatePath);

			const smokeElementsTags = SMOKE_ELEMENTS.join(',');
			const smokeElements = await page.$$(smokeElementsTags);

			const smokeScreenshotsPromises = smokeElements.map((smokeElement) => {
				const promise = smokeElement.screenshot({
					encoding: 'base64',
					type: 'jpeg',
				}) as Promise<string>;

				return promise;
			});

			const smokeScreenshots = await Promise.all(smokeScreenshotsPromises);

			res.status(200).send({
				success: true,
				message: 'Successfully fulfilled API call',
				data: {
					screenshots: smokeScreenshots,
				},
			});

			browser.close().catch(() => undefined);

			return;
		} catch {
			res.status(500).send({
				success: false,
				message: 'Failed to create smoke automations',
			});

			return;
		}
	}

	res.status(404).send({
		success: false,
		message: 'Invalid API call',
	});

	return;
}
