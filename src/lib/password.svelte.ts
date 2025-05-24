import { pickRandomItem } from './utils';

export type PasswordStrengthLevel = 'weak' | 'medium' | 'strong';
type OptionKey = 'uppercase' | 'lowercase' | 'numbers' | 'symbols';
type Options = Record<OptionKey, boolean>;

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
	uppercase: boolean = $state(true);
	lowercase: boolean = $state(true);
	numbers: boolean = $state(true);
	symbols: boolean = $state(true);
	// --------
	password: string = $derived.by(this.generatePassword.bind(this));
	strength: PasswordStrengthLevel = $derived.by(this.evaluateStrength.bind(this));

	generatePassword(): string {
		if (this.length < 10) throw new Error('length should be atleast 10');

		if (this.noOptionsSelected())
			throw new Error('all boolean states are false, atleast one should be true');

		let result = '';

		while (result.length != this.length) {
			result += this.getRandomChar();
		}

		return result;
	}

	noOptionsSelected(): boolean {
		return !(this.lowercase || this.uppercase || this.numbers || this.symbols);
	}

	getRandomChar(): string {
		const selectedOptions = this.getSelectedOptions();

		const randomOption = pickRandomItem(selectedOptions);

		if (randomOption == 'uppercase') {
			return pickRandomItem(PasswordGenerator.INGREDIENTS.uppercaseLetters);
		} else if (randomOption == 'lowercase') {
			return pickRandomItem(PasswordGenerator.INGREDIENTS.uppercaseLetters).toLowerCase();
		} else if (randomOption == 'numbers') {
			return Math.floor(Math.random() * 10) + '';
		} else {
			return pickRandomItem(PasswordGenerator.INGREDIENTS.symbols);
		}
	}

	evaluateStrength(): PasswordStrengthLevel {
		const selectedOptions = this.getSelectedOptions();

		if (selectedOptions.length >= 3) {
			return 'strong';
		} else if (selectedOptions.length >= 2) {
			return 'medium';
		} else {
			return 'weak';
		}
	}

	getSelectedOptions(): OptionKey[] {
		const options: Options = {
			uppercase: this.uppercase,
			lowercase: this.lowercase,
			numbers: this.numbers,
			symbols: this.symbols
		};

		const selectedOptions = Object.keys(options).filter(function filterInSelectedOptions(option) {
			return options[option as OptionKey];
		}) as OptionKey[];

		return selectedOptions;
	}

	reset() {
		this.length = 10;
		this.uppercase = true;
		this.lowercase = true;
		this.lowercase = true;
		this.symbols = true;
	}
}

export const passwordGenerator = new PasswordGenerator();
