<script context="module" lang="ts">
	export type ContentType = {
		path: string;
		name: string;
		type: string;
		ext: string;
		duration: number;
		index: number;
	};
</script>

<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	const content: ContentType[] = data.content;
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<Carousel {content} />
</main>
