<script lang="ts">
	import image1 from "$lib/assets/images/space.jpg";
	import image2 from "$lib/assets/images/AvaBg.jpg";
	import Carousel from "$lib/components/Carousel.svelte";

	const images = [image1, image2];
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<Carousel {images} />
</main>
