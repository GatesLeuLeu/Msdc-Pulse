<script lang="ts">
	import { onDestroy } from "svelte";
	import { fade } from "svelte/transition";

	const { images } = $props<{ images: string[] }>();

	let index = $state(0);
	const remaining = 3 * 60 * 1000;
	function next() {
		index = (index + 1) % images.length;
	}
	const interval = setInterval(next, remaining);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="flex flex-col rounded-lg bg-zinc-800 p-4 shadow-lg">
	<div>
		{#each [images[index]] as img (index)}
			<div class="flex flex-col justify-center h-screen">
				<img transition:fade src={img} alt="foo" />
			</div>
		{/each}
	</div>
</section>
