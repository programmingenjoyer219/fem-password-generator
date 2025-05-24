<script lang="ts">
	import { type PasswordStrengthLevel } from './password.svelte';
	import PasswordStrength from './PasswordStrength.svelte';

	interface Props {
		length: number;
		uppercase: boolean;
		lowercase: boolean;
		numbers: boolean;
		symbols: boolean;
		strength: PasswordStrengthLevel;
	}

	let {
		length = $bindable(0),
		uppercase = $bindable(false),
		lowercase = $bindable(false),
		numbers = $bindable(false),
		symbols = $bindable(false),
		strength
	}: Props = $props();
</script>

{#snippet RightArrowIcon()}
	<svg
		class="stroke-dark-400 group-hover:stroke-primary size-4"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		><path
			d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
		></path></svg
	>
{/snippet}

<section class="bg-dark-400 rounded-sm p-4">
	<form class="space-y-4">
		<div class="space-y-4">
			<label for="password-length" class="flex items-center justify-between">
				<span>Password Length</span>
				<span class="text-primary text-lg">{length}</span>
			</label>
			<input
				class="range-slider w-full"
				type="range"
				min="10"
				max="20"
				step="1"
				defaultValue={0}
				name="password-length"
				id="password-length"
				bind:value={length}
			/>
		</div>

		<div class="space-y-2">
			<div class="flex flex-row-reverse items-center justify-end gap-4">
				<label for="uppercase-letters">Include uppercase letters</label>
				<input
					class="accent-primary"
					type="checkbox"
					name="uppercase-letters"
					id="uppercase-letters"
					bind:checked={uppercase}
				/>
			</div>

			<div class="flex flex-row-reverse items-center justify-end gap-4">
				<label for="lowercase-letters">Include lowercase letters</label>
				<input
					class="accent-primary"
					type="checkbox"
					name="lowercase-letters"
					id="lowercase-letters"
					bind:checked={lowercase}
				/>
			</div>

			<div class="flex flex-row-reverse items-center justify-end gap-4">
				<label for="numbers">Include numbers</label>
				<input
					class="accent-primary"
					type="checkbox"
					name="numbers"
					id="numbers"
					bind:checked={numbers}
				/>
			</div>

			<div class="flex flex-row-reverse items-center justify-end gap-4">
				<label for="symbols">Include symbols</label>
				<input
					class="accent-primary"
					type="checkbox"
					name="symbols"
					id="symbols"
					bind:checked={symbols}
				/>
			</div>
		</div>

		<PasswordStrength {strength} />

		<button
			type="submit"
			class="group bg-primary text-dark-400 border-primary hover:bg-dark-400 hover:text-primary flex w-full items-center justify-center gap-2 border py-2 font-bold transition-all duration-200 hover:gap-4"
		>
			<span>GENERATE</span>
			{@render RightArrowIcon()}
		</button>
	</form>
</section>
