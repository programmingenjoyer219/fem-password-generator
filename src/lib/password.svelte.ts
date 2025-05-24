export type PasswordStrengthLevel = 'weak' | 'medium' | 'strong';

export class PasswordGenerator {
	static INGREDIENTS = {
		uppercaseLetters: [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		],
		symbols: [
			'!',
			'@',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'(',
			')',
			'-',
			'_',
			'=',
			'+',
			'[',
			']',
			'{',
			'}',
			';',
			':',
			"'",
			'"',
			'\\',
			'|',
			',',
			'.',
			'<',
			'>',
			'/',
			'?',
			'`',
			'~'
		]
	};
	// --------
	length: number = $state(10);
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
		this.length = 10;
		this.uppercase = false;
		this.lowercase = false;
		this.lowercase = false;
		this.symbols = false;
	}
}

export const passwordGenerator = new PasswordGenerator();
