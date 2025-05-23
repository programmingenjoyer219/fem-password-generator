export type PasswordStrengthLevel = 'weak' | 'medium' | 'strong';

class PasswordGenerator {
	length: number = $state(0);
	uppercase: boolean = $state(false);
	lowercase: boolean = $state(false);
	numbers: boolean = $state(false);
	symbols: boolean = $state(false);
	// --------
	password: string = $derived.by(this.generatePassword.bind(this));
	strength: PasswordStrengthLevel = $derived.by(this.evaluateStrength.bind(this));

	generatePassword(): string {
		return 'P4$SW0rD!';
	}

	evaluateStrength(): PasswordStrengthLevel {
		return 'weak';
	}

	reset() {
		this.password = '';
		this.length = 0;
		this.uppercase = false;
		this.lowercase = false;
		this.lowercase = false;
		this.symbols = false;
	}
}

export const passwordGenerator = new PasswordGenerator();
