import { generatePassword } from './password.svelte';

describe('generatePassword', () => {
	it('should not generate a password if passwordLength is 0', () => {
		const config = {
			passwordLength: 0,
			uppercaseLetters: false,
			lowercaseLetters: false,
			numbers: false,
			symbols: false
		};

		const [newPassword, err] = generatePassword(config);

		expect(newPassword).toBe(null);
		expect(err).toBe('password length cannot be zero');
	});

	it('should not generate a password if no options were selected', () => {
		const config = {
			passwordLength: 15,
			uppercaseLetters: false,
			lowercaseLetters: false,
			numbers: false,
			symbols: false
		};

		const [newPassword, err] = generatePassword(config);

		expect(newPassword).toBe(null);
		expect(err).toBe('please select atleast one option');
	});

	it('should generate a password as per the given configuration', () => {
		const config = {
			passwordLength: 15,
			uppercaseLetters: true,
			lowercaseLetters: false,
			numbers: true,
			symbols: false
		};

		const [newPassword, err] = generatePassword(config);

		expect(err).toBe(null);
		expect(newPassword).not.toBe(null);
		expect(newPassword!.length).toBe(15);
	});
});
