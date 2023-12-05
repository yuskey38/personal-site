<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div>
		{#each data.contents as content}
			<ul>
				<a href="./blog/{content.id}">
					<img src={content.eyecatch?.url} alt="eyecatch" />
				</a>
			</ul>
		{/each}
	</div>
</section>

<style>
	ul {
		display: flex;
		padding: 0px;
		justify-content: center;
	}

	img {
		max-width: 100%;
		max-height: 240px;
		aspect-ratio: 40 / 21;
	}
</style>
