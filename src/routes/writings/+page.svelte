<script lang="ts">
	import dayjs from 'dayjs';
	export let data;

	export function formatDate(date: string) {
		return dayjs(date).format('MMM D, YYYY');
	}
</script>

<svelte:head>
	<title>Writings &ndash; Rizqy Hidayat</title>
</svelte:head>

<div>
	<ul class="grid grid-rows-1 gap-3">
		{#each data.posts as post}
			<li class="">
				<a href={post.link} target="_blank" class="text-lg border-0">{post.title}</a>
				<span class="mx-2 text-slate-600">(Medium) &mdash;</span><span class="text-slate-600"
					>{formatDate(post.published)}</span
				>
			</li>
		{/each}
	</ul>
</div>
