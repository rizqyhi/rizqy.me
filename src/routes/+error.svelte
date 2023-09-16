<script lang="ts">
	import { page } from '$app/stores';

	export let title = $page.status === 404 ? 'Route Not Found' : 'Something Went Bad';
</script>

<svelte:head>
	<title>{title} &ndash; Rizqy Hidayat</title>
</svelte:head>

<div class="py-16">
	<h1 class="text-5xl font-mono font-bold tracking-tighter md:leading-snug">{title}</h1>
</div>
