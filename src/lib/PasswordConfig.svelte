<script lang="ts">
	import { generatePassword, noOptionsSelected, type PasswordConfig } from './password.svelte';

	interface Props {
		password: string;
	}

	let { password = $bindable('') }: Props = $props();
	let passwordLength = $state(10);
	let optionSelectionError = $state<null | string>(null);
	let submissionError = $state<null | string>(null);

	function handleSubmit(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		event.preventDefault();

		const passwordConfig = extractFormData();

		if (noOptionsSelected(passwordConfig)) {
			optionSelectionError = 'please select atleast one option';
			return;
		}

		optionSelectionError = null;

		const [newPassword, err] = generatePassword(passwordConfig);

		if (newPassword) {
			password = newPassword;
		} else {
			submissionError = err;
			console.error(err);
			return;
		}

		event.currentTarget.reset();
		// --------
		function extractFormData(): PasswordConfig {
			const formData = new FormData(event.currentTarget);
			const passwordLength = Number(formData.get('password-length'));
			const uppercaseLetters = !!formData.get('uppercase-letters');
			const lowercaseLetters = !!formData.get('lowercase-letters');
			const numbers = !!formData.get('numbers');
			const symbols = !!formData.get('symbols');
			return { passwordLength, uppercaseLetters, lowercaseLetters, numbers, symbols };
		}
	}
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

{#snippet PasswordOption({ labelText, optionName }: { labelText: string; optionName: string })}
	<div class="flex flex-row-reverse items-center justify-end gap-4">
		<label for={optionName}>{labelText}</label>
		<input class="accent-primary" type="checkbox" name={optionName} id={optionName} />
	</div>
{/snippet}

{#snippet GeneratePasswordButton()}
	<button
		type="submit"
		class="group bg-primary text-dark-400 border-primary hover:bg-dark-400 hover:text-primary flex w-full items-center justify-center gap-2 border py-2 font-bold transition-all duration-200 hover:gap-4"
	>
		<span>GENERATE</span>
		{@render RightArrowIcon()}
	</button>
{/snippet}

<section class="bg-dark-400 rounded-sm p-4">
	<form class="space-y-4" onsubmit={handleSubmit}>
		<div class="space-y-4">
			<label for="password-length" class="flex items-center justify-between">
				<span>Password Length</span>
				<span class="text-primary text-lg">{passwordLength}</span>
			</label>
			<input
				class="range-slider w-full"
				type="range"
				min="10"
				max="20"
				step="1"
				defaultValue={10}
				name="password-length"
				id="password-length"
				bind:value={passwordLength}
			/>
		</div>

		{#if optionSelectionError}
			<p class="text-accent">{optionSelectionError}</p>
		{/if}

		<div class="space-y-2">
			{@render PasswordOption({
				labelText: 'Include uppercase letters',
				optionName: 'uppercase-letters'
			})}

			{@render PasswordOption({
				labelText: 'Include lowercase letters',
				optionName: 'lowercase-letters'
			})}

			{@render PasswordOption({ labelText: 'Include numbers', optionName: 'numbers' })}

			{@render PasswordOption({ labelText: 'Include symbols', optionName: 'symbols' })}
		</div>

		{#if submissionError}
			<p class="text-accent">{submissionError}</p>
		{/if}

		{@render GeneratePasswordButton()}
	</form>
</section>
