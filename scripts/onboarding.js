const chalk = require('chalk');
const figlet = require('figlet');

figlet('QA - POC', (err, figletText) => {
	if (err) {
		return;
	}

	console.log(chalk.bold(figletText));

	console.log(chalk.bold.blue('Welcome to QA POC!!'));

	console.log('šāØšāØšāØšāØšāØšāØšāØšāØ\n');

	console.log(chalk.bold('Please follow these rules:'));

	console.log(
		chalk.bold.blue('- š¦ļø Use "git cmt" instead of "git commit" in order to commit your changes'),
	);
	console.log(chalk.bold.blue('- š Follow the code conventions (our linters will enforce you..)'));

	console.log(
		chalk.bold(
			`\nš„š„š„ For any help or questions, you can open an issue or contact ${chalk.italic.gray(
				'dev@vinyldepository.com',
			)} š„š„š„\n`,
		),
	);
});
