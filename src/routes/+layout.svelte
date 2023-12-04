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
					<strong class="text-xl">Yusuke Miyata</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button type="button" class="btn variant-filled">Button</button>
				<a class="btn btn-sm valiant-filled" href="/about">About</a>
				<a class="btn btn-sm" href="/blogs">Blog</a>
				<a class="btn btn-sm" href="/contact">Contact</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
