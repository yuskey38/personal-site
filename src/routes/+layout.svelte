<script lang="ts">
	import '../app.pcss';
</script>

<!-- シンプルなナビゲーション -->
<header class="nav-header">
	<nav class="nav-container">
		<a href="/" class="nav-logo">YUSUKE MIYATA</a>
		<div class="nav-links">
			<a href="/about" class="nav-link">About</a>
			<a href="/products" class="nav-link">Products</a>
			<a href="/blog" class="nav-link">Blog</a>
			<a href="/contact" class="nav-link">Contact</a>
		</div>
	</nav>
</header>

<!-- メインコンテンツ -->
<main class="main-content">
	<slot />
</main>

<!-- シンプルなフッター -->
<footer class="page-footer">
	<p class="copyright">© YUSUKE MIYATA 2025</p>
</footer>

<style>
	/* グローバルリセット */
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		overflow-y: auto;
	}

	/* ナビゲーション */
	.nav-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid #e5e5e5;
		z-index: 100;
		height: 80px;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.nav-logo {
		font-size: 1.25rem;
		font-weight: 700;
		color: #111;
		text-decoration: none;
		letter-spacing: 0.05em;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: #555;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.nav-link:hover {
		color: #111;
	}

	/* メインコンテンツ */
	.main-content {
		flex: 1;
		padding-top: 80px; /* ナビゲーションの高さ分 */
		width: 100%;
	}

	/* フッター */
	.page-footer {
		background-color: #f9f9f9;
		padding: 2rem;
		text-align: center;
		border-top: 1px solid #e5e5e5;
		width: 100%;
	}

	.copyright {
		color: #666;
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 0.05em;
		margin: 0;
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem;
		}

		.nav-logo {
			font-size: 1.125rem;
		}

		.nav-links {
			gap: 1.5rem;
		}

		.nav-link {
			font-size: 0.875rem;
		}
	}
</style>
