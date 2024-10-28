<script lang="ts">
	import { onDestroy } from "svelte";
	import { fade } from "svelte/transition";
	import type { ContentType } from "../../routes/+page.svelte";

	const { content } = $props<{
		content: ContentType[];
	}>();

	let index = $state(0);
	const sorted = content.sort(
		(a: ContentType, b: ContentType) => a.index - b.index,
	);
	function next() {
		index = (index + 1) % sorted.length;
	}

	let interval: ReturnType<typeof setInterval>;
	$effect(() => {
		clearInterval(interval);
		const remaining = sorted[index].duration * 60 * 1000;
		interval = setInterval(() => {
			next();
		}, remaining);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="flex flex-col rounded-lg bg-zinc-800 p-4 shadow-lg">
	<div>
		{#each [sorted[index]] as val (index)}
			<div class="flex flex-col justify-center h-screen">
				{#if val.type === "img"}
					<img
						in:fade={{ duration: 2000 }}
						out:fade
						src={val.path}
						alt={val.name}
					/>
				{/if}
				{#if val.type === "vid"}
					<video autoplay>
						<source
							src={val.path}
							type={`video/${val.ext}`}
						/>
						<track kind="captions" />
					</video>
				{/if}
			</div>
		{/each}
	</div>
</section>
