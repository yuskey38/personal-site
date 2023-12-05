<script lang="ts">
	import { onMount } from 'svelte';

	let windowHeight: number | null = null;
	onMount(() => {
		windowHeight = window.innerHeight;

		// ウィンドウのリサイズイベントを監視して高さを更新
		window.addEventListener('resize', () => {
			windowHeight = window.innerHeight;
		});
	});
</script>

<section class="top-container" style="height: {windowHeight}px;">
	<div class="top-content">
		<h1>YUSUKE MIYATA</h1>
		<p class="top-description">This is a mobile app developer's portfolio site.</p>
	</div>
</section>
<section class="card w-full">
	<div class="p-4 space-y-4">
		<div class="grid grid-cols-3 gap-4">
			<div class="placeholder" style="height: 300px;" />
			<div class="placeholder" style="height: 300px;" />
			<div class="placeholder" style="height: 300px;" />
		</div>
	</div>
</section>

<style>
	h1 {
		font-size: 4vw;
		font-weight: bold;
		letter-spacing: 0.2em;
	}
	.top-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top-content {
		text-align: center;
	}

	.top-description {
		margin-top: 2vw;
		font-size: 1em;
		font-weight: bold;
		letter-spacing: 0.2vw;
	}
</style>
