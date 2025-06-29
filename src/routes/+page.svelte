<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>YUSUKE MIYATA | Mobile App Developer</title>
	<meta name="description" content="Mobile app developer specializing in iOS, Android, and Flutter development." />
</svelte:head>

<!-- ヒーローセクション -->
<section class="hero-section">
	<div class="hero-content" class:animate={mounted}>
		<h1 class="hero-title">YUSUKE MIYATA</h1>
		<p class="hero-subtitle">Mobile App Developer</p>
		<p class="hero-description">
			iOS、Android、Flutterアプリの開発を専門としています。<br>
			ユーザーエクスペリエンスを重視した、高品質なモバイルアプリケーションを制作します。
		</p>
		<div class="hero-actions">
			<a href="/products" class="btn-primary">View Products</a>
			<a href="/about" class="btn-secondary">About Me</a>
		</div>
	</div>
</section>

<!-- スキルセクション -->
<section class="skills-section">
	<div class="container">
		<h2 class="section-title">Skills</h2>
		<div class="skills-grid">
			<div class="skill-card" class:animate={mounted}>
				<h3 class="skill-title">iOS Development</h3>
				<p class="skill-description">Swift / SwiftUIを使用したネイティブiOSアプリ開発</p>
			</div>
			<div class="skill-card" class:animate={mounted}>
				<h3 class="skill-title">Android Development</h3>
				<p class="skill-description">Kotlin / Jetpack Composeを使用したAndroidアプリ開発</p>
			</div>
			<div class="skill-card" class:animate={mounted}>
				<h3 class="skill-title">Flutter Development</h3>
				<p class="skill-description">Dartを使用したクロスプラットフォームアプリ開発</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* ヒーローセクション */
	.hero-section {
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background-color: #fafafa;
	}

	.hero-content {
		text-align: center;
		max-width: 800px;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.hero-content.animate {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 700;
		color: #111;
		margin: 0 0 1rem 0;
		letter-spacing: 0.05em;
	}

	.hero-subtitle {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		color: #555;
		margin: 0 0 2rem 0;
		font-weight: 400;
	}

	.hero-description {
		font-size: 1.125rem;
		color: #666;
		line-height: 1.6;
		margin: 0 0 3rem 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
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

	.btn-secondary {
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

	.btn-secondary:hover {
		background-color: #111;
		color: white;
		transform: translateY(-1px);
	}

	/* スキルセクション */
	.skills-section {
		padding: 5rem 2rem;
		background-color: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #111;
		text-align: center;
		margin: 0 0 3rem 0;
		letter-spacing: 0.05em;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.skill-card {
		padding: 2rem;
		background-color: #fafafa;
		border-radius: 8px;
		text-align: center;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease;
	}

	.skill-card.animate {
		opacity: 1;
		transform: translateY(0);
	}

	.skill-card:nth-child(2) {
		transition-delay: 0.1s;
	}

	.skill-card:nth-child(3) {
		transition-delay: 0.2s;
	}

	.skill-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 1rem 0;
	}

	.skill-description {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.hero-section {
			min-height: 70vh;
			padding: 1rem;
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-secondary {
			width: 200px;
			text-align: center;
		}

		.skills-section {
			padding: 3rem 1rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
