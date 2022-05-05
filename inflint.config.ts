import { Config } from 'inflint';

const inflintConfig: Config = {
	aliases: {
		'[UIComponent]': `V([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?`,
		'[SpecTest]': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*.spec$',
	},
	rules: {
		'public/images/**/*': [2, 'kebab-case'],
		'src/{utils,styles,models,hooks,data,i18n,pages}/**/*': [2, 'kebab-case'],
		'src/components/ui/**/*.tsx': [2, '[UIComponent]'],
		'src/components/{containers,layout}/*.tsx': [2, 'PascalCase.Point'],
		'src/components/**/*.ts': [2, '^index$'],
		'src/{components,styles}/**/*.css': 2,
		'src/**/*.js': 2,
	},
};

export default inflintConfig;
