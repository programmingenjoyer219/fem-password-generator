<script lang="ts">
	interface Props {
		strength: 'weak' | 'medium' | 'strong';
	}

	let { strength }: Props = $props();
</script>

<div class="bg-dark-500 flex items-center justify-between rounded-sm p-4">
	<span class="text-light-400">STRENGTH</span>

	<div class="flex items-center gap-4">
		<span class="sr-only min-[425px]:not-sr-only min-[425px]:text-lg">{strength.toUpperCase()}</span
		>
		<div aria-hidden="true" class="grid grid-cols-4 gap-2">
			<div class="bg-accent h-[var(--text-lg)] w-2 border"></div>
			<div class="bg-accent h-[var(--text-lg)] w-2 border"></div>
			<div class="bg-accent h-[var(--text-lg)] w-2 border"></div>
			<div class="bg-accent h-[var(--text-lg)] w-2 border"></div>
		</div>
	</div>
</div>
