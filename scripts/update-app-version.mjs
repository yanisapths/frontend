import packageJson from '@npmcli/package-json'
import { execSync } from 'child_process'
import inquirer from 'inquirer'

const { version } = await inquirer.prompt([
	{
		type: 'list',
		name: 'version',
		message: 'Which position would you like to update? (major.minor.patch)',
		choices: ['major', 'minor', 'patch'],
	},
])

const pkgJson = await packageJson.load('./')

const oldVersion = pkgJson.content.version || '1.0.0'

const [major, minor, patch] = oldVersion.split('.')

let newVersion = oldVersion

switch (version) {
	case 'major':
		const majorAsNumber = Number(major)

		newVersion = `${majorAsNumber + 1}.0.0`

		break
	case 'minor':
		const minorAsNumber = Number(minor)

		newVersion = `${major}.${minorAsNumber + 1}.0`

		break
	case 'patch':
		const patchAsNumber = Number(patch)

		newVersion = `${major}.${minor}.${patchAsNumber + 1}`

		break
}

console.log('\n--------------------------\n')
logChangeValue('App Version', oldVersion, newVersion)
console.log('\n--------------------------\n')

const { isConfirm } = await inquirer.prompt([
	{
		type: 'confirm',
		name: 'isConfirm',
		message: `Are you sure you want to update the version from ${oldVersion} to ${newVersion}?`,
	},
])

if (isConfirm) {
	switch (version) {
		case 'major':
			execSync('npm version major --no-git-tag-version')

			break
		case 'minor':
			execSync('npm version minor --no-git-tag-version')

			break
		case 'patch':
			execSync('npm version patch --no-git-tag-version')

			break
	}

	console.log('\n\x1b[32m', 'Version updated successfully!', '\x1b[0m')
}

function logChangeValue(label, prevValue, nextValue) {
	console.log(label, '\x1b[32m', prevValue, '\x1b[0m', '→', '\x1b[33m', nextValue, '\x1b[0m')
}
