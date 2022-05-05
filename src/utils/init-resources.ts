import path from 'path';

import fs from 'fs-extra';

export const initSmokeResources = async () => {
	const smokeElementsScreenshots = path.join(process.cwd(), 'resources', 'screenshots', 'smoke-elements');

	await fs.remove(smokeElementsScreenshots);
	await fs.ensureDir(smokeElementsScreenshots);
};
