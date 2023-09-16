<script>
	import '../app.css';
</script>

<div class="max-w-5xl mx-auto px-8">
	<header class="md:flex md:justify-between py-6">
		<a
			href="/"
			class="font-mono text-2xl font-bold border-none text-slate-800 hover:text-emerald-700"
			>🌄 rizqy.me</a
		>
		<nav class="md:flex md:items-center mt-4 md:mt-0 leading-loose md:leading-normal">
			<a href="/about" class="text-lg mr-4 md:mx-4">About</a>
			<a href="/writings" class="text-lg mr-4 md:mx-4">Writings</a>
			<a href="/works" class="text-lg mr-4 md:mx-4">Works</a>
			<a href="/mentoring" class="text-lg mr-4 md:mx-4 md:mr-0">Mentoring</a>
		</nav>
	</header>

	<slot />

	<footer class="sm:flex sm:justify-between pt-16 pb-6">
		<div class="mb-4 sm:mb-0">
			<a href="https://github.com/rizqyhi" target="_blank" class="mr-4 sm:mx-2">GitHub</a>
			<a href="https://twitter.com/rizqyhi" target="_blank" class="mr-4 sm:mx-2">Twitter/X</a>
			<a href="https://linkedin.com/in/rizqyhidayat" target="_blank" class="mr-4 sm:mx-2 sm:mr-0"
				>LinkedIn</a
			>
		</div>
		<div class="sm:order-first">&copy; 2023 Rizqy Hidayat</div>
	</footer>
</div>
