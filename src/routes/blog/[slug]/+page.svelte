<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>ブログ</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>{data.title}</h1>
	<img src={data.eyecatch?.url} alt="" />
	<div>{@html data.content}</div>
</section>

<style>
	section {
		margin: 20px;
	}

	img {
		max-width: 100%;
		height: auto;
	}
</style>
