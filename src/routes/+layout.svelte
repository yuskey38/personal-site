<script lang="ts">
	import '../app.pcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong>Yusuke Miyata</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="btn-group variant-filled">
					<a class="btn-sm" href="/about">About</a>
					<a class="btn-sm" href="/blog">Blog</a>
					<a class="btn-sm" href="/selection">Selection</a>
					<a class="btn-sm" href="/contact">Contact</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<section class="page-footer">
		<p class="copyright">©︎ YUSUKE MIYATA 2023 ~ 2024</p>
	</section>
</AppShell>

<style>
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
