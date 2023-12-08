<script lang="ts">
	import '../app.pcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<header class="header">
		<slot name="header">
			<!-- App Bar -->
			<AppBar background="">
				<svelte:fragment slot="lead">
					<a href="/">
						<strong>Yusuke Miyata</strong>
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/selection">Selection</a>
					<a href="/contact">Contact</a>
				</svelte:fragment>
			</AppBar>
		</slot>
	</header>
	<!-- Page Route Content -->
	<slot />

	<section class="page-footer">
		<p class="copyright">©︎ YUSUKE MIYATA 2023 ~ 2024</p>
	</section>
</AppShell>

<style>
	.header {
		width: 100%;
		height: auto;
		position: fixed;
		top: 0;
		z-index: 100;
	}
	.page-footer {
		width: 100%;
		aspect-ratio: 6;
		background-color: #191919;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.copyright {
		color: white;
		font-size: min(2vw, 16px);
		font-weight: lighter;
		letter-spacing: 0.2em;
		text-align: center;
	}
</style>
