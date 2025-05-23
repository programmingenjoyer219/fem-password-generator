type PasswordStrength = 'weak' | 'medium' | 'strong';

class PasswordGenerator {
	password: string = $state('');
	length: number = $state(0);
	uppercase: boolean = $state(false);
	lowercase: boolean = $state(false);
	symbols: boolean = $state(false);
	// --------
	strength: PasswordStrength = $derived.by(this.evaluateStrength.bind(this));

	evaluateStrength(): PasswordStrength {
		return 'weak';
	}

	reset() {
		this.password = '';
		this.length = 0;
		this.uppercase = false;
		this.lowercase = false;
		this.symbols = false;
	}
}

export const passwordGenerator = new PasswordGenerator();
