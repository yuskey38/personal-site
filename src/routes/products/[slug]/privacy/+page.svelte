<script lang="ts">
	import { parseMarkdown } from '$lib/content';
	import type { PageData } from './$types';
	
	export let data: PageData;
	$: htmlContent = parseMarkdown(data.privacyMarkdown);
</script>

<svelte:head>
	<title>Privacy Policy - {data.productName} | YUSUKE MIYATA</title>
	<meta name="description" content="{data.productName}のプライバシーポリシーです。" />
</svelte:head>

<section class="privacy-section">
	<div class="container">
		<!-- パンくずリスト -->
		<nav class="breadcrumb">
			<a href="/products">Products</a>
			<span class="breadcrumb-separator">/</span>
			<a href="/products/{data.productId}">{data.productName}</a>
			<span class="breadcrumb-separator">/</span>
			<span class="current">Privacy Policy</span>
		</nav>

		<!-- プライバシーポリシー内容 -->
		<div class="privacy-content">
			{@html htmlContent}
		</div>

		<!-- フッターナビゲーション -->
		<footer class="privacy-footer">
			<a href="/products/{data.productId}" class="btn-outline">
				← {data.productName}に戻る
			</a>
		</footer>
	</div>
</section>

<style>
	.privacy-section {
		padding: 2rem 0 4rem 0;
		min-height: 70vh;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* パンくずリスト */
	.breadcrumb {
		margin-bottom: 2rem;
		font-size: 0.875rem;
		color: #666;
	}

	.breadcrumb a {
		color: #666;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.breadcrumb a:hover {
		color: #111;
	}

	.breadcrumb-separator {
		margin: 0 0.5rem;
	}

	.current {
		color: #111;
		font-weight: 500;
	}

	/* プライバシーポリシー内容 */
	.privacy-content {
		background-color: white;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
		padding: 3rem;
		margin-bottom: 3rem;
		line-height: 1.7;
	}

	.privacy-content :global(h1) {
		font-size: 2rem;
		font-weight: 700;
		color: #111;
		margin: 0 0 2rem 0;
		padding-bottom: 1rem;
		border-bottom: 2px solid #f3f4f6;
	}

	.privacy-content :global(h2) {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111;
		margin: 3rem 0 1.5rem 0;
	}

	.privacy-content :global(h3) {
		font-size: 1.25rem;
		font-weight: 600;
		color: #111;
		margin: 2rem 0 1rem 0;
	}

	.privacy-content :global(p) {
		color: #555;
		margin: 0 0 1.5rem 0;
	}

	.privacy-content :global(ul) {
		padding-left: 1.5rem;
		margin: 0 0 1.5rem 0;
	}

	.privacy-content :global(li) {
		color: #555;
		margin: 0.5rem 0;
	}

	.privacy-content :global(strong) {
		color: #111;
		font-weight: 600;
	}

	.privacy-content :global(a) {
		color: #111;
		text-decoration: underline;
	}

	.privacy-content :global(a:hover) {
		text-decoration: none;
	}

	/* フッターナビゲーション */
	.privacy-footer {
		text-align: center;
	}

	.btn-outline {
		background-color: transparent;
		color: #111;
		padding: 0.875rem 2rem;
		text-decoration: none;
		border: 2px solid #111;
		border-radius: 6px;
		font-weight: 500;
		transition: all 0.2s ease;
		display: inline-block;
	}

	.btn-outline:hover {
		background-color: #111;
		color: white;
		transform: translateY(-1px);
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}

		.privacy-content {
			padding: 2rem;
		}

		.privacy-content :global(h1) {
			font-size: 1.75rem;
		}

		.privacy-content :global(h2) {
			font-size: 1.25rem;
		}
	}
</style> 