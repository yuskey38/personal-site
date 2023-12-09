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
		<h1 class="title">YUSUKE MIYATA</h1>
		<p class="top-description">This is a mobile app developer's site.</p>
	</div>
</section>
<section class="skills-container">
	<h2 class="subtitle">What I can do</h2>
	<div class="p-4">
		<div class="grid grid-cols-3 gap-8">
			<div class="skill">
				<p>iOS App Development</p>
			</div>
			<div class="skill">
				<p>Android App Development</p>
			</div>
			<div class="skill">
				<p>Flutter App Development</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.top-container {
		@apply flex w-full items-center justify-center;
	}

	.top-content {
		@apply text-center;
	}

	.title {
		@apply text-[4vw] font-bold tracking-widest;
	}

	.top-description {
		@apply mt-[2vw] text-base font-bold tracking-wider;
	}

	.skills-container {
		@apply w-full bg-[#fdfdfd] text-center;
	}

	.subtitle {
		@apply text-[3.5vw] font-bold tracking-widest;
	}

	.skill {
		@apply flex aspect-[1] w-full items-center justify-center bg-[#5d5d5d] text-[1.5vw] font-bold text-white;
	}
</style>
