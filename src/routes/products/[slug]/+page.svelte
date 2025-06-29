<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	$: product = data.product;
</script>

<svelte:head>
	<title>{product.name} | YUSUKE MIYATA</title>
	<meta name="description" content={product.description} />
</svelte:head>

<section class="product-detail-section">
	<div class="container">
		<!-- ヘッダー -->
		<header class="product-header">
			<nav class="breadcrumb">
				<a href="/products">Products</a>
				<span class="breadcrumb-separator">/</span>
				<span class="current">{product.name}</span>
			</nav>
			
			<div class="product-intro">
				<h1 class="product-title">{product.name}</h1>
				<p class="product-subtitle">{product.description}</p>
				
				<div class="product-meta">
					<span class="product-platform">{product.platform}</span>
					<span class="product-status" class:released={product.status === 'リリース済み'}>
						{product.status}
					</span>
				</div>
			</div>
		</header>

		<!-- 詳細説明 -->
		<section class="product-content">
			<h2 class="section-title">概要</h2>
			<p class="product-description">{product.detailedDescription}</p>
		</section>

		<!-- 機能一覧 -->
		{#if product.features && product.features.length > 0}
		<section class="product-features">
			<h2 class="section-title">主な機能</h2>
			<ul class="features-list">
				{#each product.features as feature}
					<li class="feature-item">{feature}</li>
				{/each}
			</ul>
		</section>
		{/if}

		<!-- 技術スタック -->
		{#if product.technologies && product.technologies.length > 0}
		<section class="product-technologies">
			<h2 class="section-title">使用技術</h2>
			<div class="tech-tags">
				{#each product.technologies as tech}
					<span class="tech-tag">{tech}</span>
				{/each}
			</div>
		</section>
		{/if}

		<!-- アクション -->
		<section class="product-actions">
			<div class="action-buttons">
				{#if product.appStoreUrl && product.status === 'リリース済み'}
					<a href={product.appStoreUrl} class="btn-primary" target="_blank">
						{product.platform.includes('iOS') ? 'App Store' : 'Google Play'}で見る
					</a>
				{/if}
				{#if product.githubUrl}
					<a href={product.githubUrl} class="btn-outline" target="_blank">
						GitHub
					</a>
				{/if}
				<a href="/products/{product.id}/privacy" class="btn-text">
					Privacy Policy
				</a>
			</div>
		</section>
	</div>
</section>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	/* プロダクト詳細 */
	.product-detail-section {
		padding: 2rem 0 4rem 0;
		min-height: 70vh;
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

	/* プロダクトヘッダー */
	.product-header {
		margin-bottom: 3rem;
	}

	.product-intro {
		margin-top: 1rem;
	}

	.product-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #111;
		margin: 0 0 1rem 0;
		line-height: 1.2;
	}

	.product-subtitle {
		font-size: 1.25rem;
		color: #666;
		margin: 0 0 1.5rem 0;
		line-height: 1.5;
	}

	.product-meta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.product-platform {
		background-color: #f3f4f6;
		color: #374151;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.product-status {
		background-color: #fef3c7;
		color: #d97706;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.product-status.released {
		background-color: #d1fae5;
		color: #059669;
	}

	/* セクション */
	.product-content,
	.product-features,
	.product-technologies,
	.product-actions {
		margin-bottom: 3rem;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 1.5rem 0;
	}

	.product-description {
		color: #555;
		line-height: 1.7;
		margin: 0;
		white-space: pre-line;
	}

	/* 機能一覧 */
	.features-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.feature-item {
		padding: 0.75rem 0;
		border-bottom: 1px solid #f3f4f6;
		color: #555;
		position: relative;
		padding-left: 1.5rem;
	}

	.feature-item:before {
		content: "✓";
		position: absolute;
		left: 0;
		color: #059669;
		font-weight: bold;
	}

	.feature-item:last-child {
		border-bottom: none;
	}

	/* 技術タグ */
	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.tech-tag {
		background-color: #111;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	/* アクションボタン */
	.action-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.btn-primary {
		background-color: #111;
		color: white;
		padding: 0.875rem 2rem;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 500;
		transition: all 0.2s ease;
		display: inline-block;
	}

	.btn-primary:hover {
		background-color: #333;
		transform: translateY(-1px);
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
		.container {
			padding: 1rem;
		}

		.product-title {
			font-size: 2rem;
		}

		.product-subtitle {
			font-size: 1.125rem;
		}

		.action-buttons {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-primary,
		.btn-outline {
			text-align: center;
		}
	}
</style> 