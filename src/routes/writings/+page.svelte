<script lang="ts">
	import dayjs from 'dayjs';
	export let data;

	export function formatDate(date: number | string) {
		return dayjs(date).format('MMM D, YYYY');
	}
</script>

<div>
	<ul class="grid grid-rows-1 gap-3">
		{#each data.posts as yearlyPosts}
			<li class="pt-4 font-bold font-mono text-lg">{yearlyPosts.year}</li>

			{#each yearlyPosts.items as post}
				<li>
					<a href={post.link} target="_blank" class="text-lg border-0">{post.title}</a>
					<span class="mx-2 text-slate-600"
						>{post.link.includes('medium.com') ? '(Medium)' : ''} &mdash;</span
					><span class="text-slate-600">{formatDate(post.published)}</span>
				</li>
			{/each}
		{/each}
	</ul>
</div>
