<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	$: products = data.products;
</script>

<svelte:head>
	<title>Products | YUSUKE MIYATA</title>
	<meta name="description" content="開発したモバイルアプリケーションの一覧です。" />
</svelte:head>

<section class="products-section">
	<div class="container">
		<header class="page-header">
			<h1 class="page-title">Products</h1>
			<p class="page-description">
				これまでに開発したモバイルアプリケーションをご紹介します。
			</p>
		</header>

		<div class="products-grid">
			{#each products as product}
				<article class="product-card">
					<div class="product-content">
						<h2 class="product-title">{product.name}</h2>
						<p class="product-description">{product.description}</p>
						<div class="product-meta">
							<span class="product-platform">{product.platform}</span>
							<span class="product-status" class:released={product.status === 'リリース済み'}>
								{product.status}
							</span>
						</div>
					</div>
					<div class="product-actions">
						<a href="/products/{product.id}" class="btn-outline">詳細を見る</a>
						<a href="/products/{product.id}/privacy" class="btn-text">Privacy Policy</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.products-section {
		padding: 3rem 2rem;
		min-height: 70vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.page-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.page-title {
		font-size: 3rem;
		font-weight: 700;
		color: #111;
		margin: 0 0 1rem 0;
		letter-spacing: 0.05em;
	}

	.page-description {
		font-size: 1.125rem;
		color: #666;
		line-height: 1.6;
		margin: 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.product-card {
		background-color: white;
		border: 1px solid #e5e5e5;
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.product-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
		border-color: #d1d5db;
	}

	.product-content {
		margin-bottom: 1.5rem;
	}

	.product-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 1rem 0;
	}

	.product-description {
		color: #666;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
	}

	.product-meta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.product-platform {
		background-color: #f3f4f6;
		color: #374151;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.product-status {
		background-color: #fef3c7;
		color: #d97706;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.product-status.released {
		background-color: #d1fae5;
		color: #059669;
	}

	.product-actions {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.btn-outline {
		background-color: transparent;
		color: #111;
		padding: 0.5rem 1.5rem;
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
	}

	.btn-text {
		color: #666;
		text-decoration: none;
		font-size: 0.875rem;
		transition: color 0.2s ease;
	}

	.btn-text:hover {
		color: #111;
		text-decoration: underline;
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.products-section {
			padding: 2rem 1rem;
		}

		.page-title {
			font-size: 2.5rem;
		}

		.products-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.product-card {
			padding: 1.5rem;
		}

		.product-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-outline {
			text-align: center;
		}
	}
</style> 