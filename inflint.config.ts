import { Config } from 'inflint';

const inflintConfig: Config = {
	rules: {
		'*.yml': 2,
		'scripts/**/*': [2, 'kebab-case.point'],
		'src/{styles,i18n,hooks}/**/*': [2, 'kebab-case'],
		'src/components/{containers,layout}/**/*': [2, 'PascalCase', { onlyDirectories: true }],
		'src/components/{containers,layout}/**/*.ts': [2, '^index$', { onlyFiles: true }],
		'src/components/{containers,layout}/**/*.tsx': [2, 'PascalCase.Point', { onlyFiles: true }],
		'src/components/{containers,layout}/**/*.scss': [2, 'PascalCase.Point', { onlyFiles: true }],
		'**/*.css': 2,
		'src/**/*.js': 2,
	},
};

export default inflintConfig;
