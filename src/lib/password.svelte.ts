import { pickRandomItem } from './utils';

type OptionKey = 'uppercaseLetters' | 'lowercaseLetters' | 'numbers' | 'symbols';
type Options = Record<OptionKey, boolean>;
export type PasswordConfig = { passwordLength: number } & Options;

let password = $state('P4$SW0r|)!');

export const passwordStore = {
	get value(): string {
		return password;
	},
	set value(v: string) {
		password = v;
	}
};

const INGREDIENTS: Record<OptionKey, string[]> = {
	uppercaseLetters: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
	lowercaseLetters: [...'abcdefghijklmnopqrstuvwxyz'],
	numbers: [...'0123456789'],
	symbols: [...'!@#$%^&*()_+[]{}|;:,.<>?/`~-=']
};

export function generatePassword(config: PasswordConfig): [string | null, string | null] {
	const { passwordLength, ...options } = config;

	if (passwordLength == 0) {
		return [null, 'password length cannot be zero'];
	}

	if (noOptionsSelected(config)) {
		return [null, 'please select atleast one option'];
	}

	const selectedOptions = Object.keys(options).filter(function filterInSelectedOptions(option) {
		return options[option as OptionKey];
	}) as OptionKey[];

	let result = '';

	while (result.length != passwordLength) {
		result += getRandomChar(selectedOptions);
	}

	return [result, null];
}

export function noOptionsSelected(config: PasswordConfig): boolean {
	const { lowercaseLetters, uppercaseLetters, numbers, symbols } = config;
	return !(lowercaseLetters || uppercaseLetters || numbers || symbols);
}

function getRandomChar(selectedOptions: OptionKey[]): string {
	const randomOption = pickRandomItem(selectedOptions);
	const randomChar = pickRandomItem(INGREDIENTS[randomOption]);
	return randomChar;
}
