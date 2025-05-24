import { PasswordGenerator } from './password.svelte';

describe('PasswordGenerator', () => {
	it('should be initialised with length set to 10', () => {
		const passwordGenerator = new PasswordGenerator();

		expect(passwordGenerator.length).toBe(10);
	});

	it('should be initialised with boolean states set to true', () => {
		const passwordGenerator = new PasswordGenerator();

		expect(passwordGenerator.uppercase).toBe(true);
		expect(passwordGenerator.lowercase).toBe(true);
		expect(passwordGenerator.numbers).toBe(true);
		expect(passwordGenerator.symbols).toBe(true);
	});

	it('should be initialised with password set to a string of length 10', () => {
		const passwordGenerator = new PasswordGenerator();

		expect(passwordGenerator.password.length).toBe(10);
	});

	it('should be initialised with strength set to strong', () => {
		const passwordGenerator = new PasswordGenerator();

		expect(passwordGenerator.strength).toBe('strong');
	});

	describe('generatePassword', () => {
		it('should throw an error if length is less than 10', () => {
			const passwordGenerator = new PasswordGenerator();
			passwordGenerator.length = 3;

			expect(() => passwordGenerator.generatePassword()).toThrow(
				new Error('length should be atleast 10')
			);
		});

		it('should throw an error if there is not a single boolean state set to true', () => {
			const passwordGenerator = new PasswordGenerator();
			passwordGenerator.lowercase = false;
			passwordGenerator.uppercase = false;
			passwordGenerator.numbers = false;
			passwordGenerator.symbols = false;

			expect(() => passwordGenerator.generatePassword()).toThrow(
				new Error('all boolean states are false, atleast one should be true')
			);
		});

		it('should generate a password of specified length', () => {
			const passwordGenerator = new PasswordGenerator();
			passwordGenerator.length = 15;
			passwordGenerator.generatePassword();

			expect(passwordGenerator.password.length).toBe(15);

			passwordGenerator.length = 18;
			passwordGenerator.generatePassword();

			expect(passwordGenerator.password.length).toBe(18);
		});
	});

	describe('evaluateStrength', () => {
		it('should return weak if only one boolean state is set to true', () => {
			const passwordGenerator = new PasswordGenerator();
			passwordGenerator.uppercase = true;
			passwordGenerator.lowercase = false;
			passwordGenerator.numbers = false;
			passwordGenerator.symbols = false;

			expect(passwordGenerator.evaluateStrength()).toBe('weak');
		});

		it('should return medium if two to three boolean states are set to true', () => {
			{
				const passwordGenerator = new PasswordGenerator();
				passwordGenerator.uppercase = true;
				passwordGenerator.lowercase = false;
				passwordGenerator.numbers = false;
				passwordGenerator.symbols = false;

				expect(passwordGenerator.evaluateStrength()).toBe('weak');
			}
			{
				const passwordGenerator = new PasswordGenerator();
				passwordGenerator.uppercase = true;
				passwordGenerator.lowercase = true;
				passwordGenerator.numbers = false;
				passwordGenerator.symbols = false;

				expect(passwordGenerator.evaluateStrength()).toBe('medium');
			}
			{
				const passwordGenerator = new PasswordGenerator();
				passwordGenerator.uppercase = true;
				passwordGenerator.lowercase = true;
				passwordGenerator.numbers = true;
				passwordGenerator.symbols = false;

				expect(passwordGenerator.evaluateStrength()).toBe('strong');
			}
		});
	});

	describe('reset', () => {
		it('should reset the states to their default values', () => {
			const passwordGenerator = new PasswordGenerator();
			passwordGenerator.length = 15;
			passwordGenerator.uppercase = false;
			passwordGenerator.reset();

			expect(passwordGenerator.length).toBe(10);
			expect(passwordGenerator.password.length).toBe(10);
			expect(passwordGenerator.uppercase).toBe(true);
		});
	});
});
