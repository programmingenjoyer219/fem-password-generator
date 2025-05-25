<script>
	import { passwordStore } from '$lib/password.svelte';
	import PasswordConfig from '$lib/PasswordConfig.svelte';
	import PasswordDisplay from '$lib/PasswordDisplay.svelte';
</script>

<h1 class="text-md text-light-400 text-center font-medium">Password Generator</h1>
<PasswordDisplay password={passwordStore.value} />
<PasswordConfig bind:password={passwordStore.value} />
