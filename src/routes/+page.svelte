<script>
	import { passwordGenerator } from '$lib/password.svelte';
	import PasswordConfig from '$lib/PasswordConfig.svelte';
	import PasswordDisplay from '$lib/PasswordDisplay.svelte';
</script>

<h1 class="text-md text-light-400 text-center font-medium">Password Generator</h1>
<PasswordDisplay password={passwordGenerator.password} />
<PasswordConfig
	bind:length={passwordGenerator.length}
	bind:lowercase={passwordGenerator.lowercase}
	bind:uppercase={passwordGenerator.uppercase}
	bind:numbers={passwordGenerator.numbers}
	bind:symbols={passwordGenerator.symbols}
	strength={passwordGenerator.strength}
/>
