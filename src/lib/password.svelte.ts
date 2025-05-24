let password = $state('P4$SW0r|)!');

export const passwordStore = {
	get value(): string {
		return password;
	},
	set value(v: string) {
		password = v;
	}
};
