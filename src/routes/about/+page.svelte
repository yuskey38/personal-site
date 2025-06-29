<svelte:head>
	<title>About | YUSUKE MIYATA</title>
	<meta name="description" content="YUSUKE MIYATAのプロフィールと経歴について" />
</svelte:head>

<section class="about-section">
	<div class="container">
		<!-- ヘッダー -->
		<header class="about-header">
			<h1 class="page-title">About Me</h1>
			<p class="page-subtitle">プロフィールと経歴</p>
		</header>

		<!-- プロフィール -->
		<section class="profile-section">
			<div class="profile-content">
				<h2 class="section-title">Profile</h2>
				<div class="profile-info">
					<div class="profile-text">
						<h3 class="name">宮田 雄介 (YUSUKE MIYATA)</h3>
						<p class="title">Mobile App Developer</p>
						<p class="description">
							iOS、Android、Flutterを専門とするモバイルアプリ開発者です。<br>
							ユーザー体験を重視し、直感的で使いやすいアプリの開発を心がけています。<br>
							技術の進歩に常にアンテナを張り、最新の開発手法を取り入れながら、<br>
							高品質なモバイルアプリケーションを提供しています。
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- スキル -->
		<section class="skills-section">
			<h2 class="section-title">Skills</h2>
			<div class="skills-categories">
				<div class="skill-category">
					<h3 class="category-title">Mobile Development</h3>
					<ul class="skill-list">
						<li class="skill-item">iOS (Swift, SwiftUI)</li>
						<li class="skill-item">Android (Kotlin, Jetpack Compose)</li>
						<li class="skill-item">Flutter (Dart)</li>
					</ul>
				</div>
				
				<div class="skill-category">
					<h3 class="category-title">Backend & Tools</h3>
					<ul class="skill-list">
						<li class="skill-item">Firebase</li>
						<li class="skill-item">REST API</li>
						<li class="skill-item">Git / GitHub</li>
						<li class="skill-item">CI/CD</li>
					</ul>
				</div>
				
				<div class="skill-category">
					<h3 class="category-title">Design & Others</h3>
					<ul class="skill-list">
						<li class="skill-item">Figma</li>
						<li class="skill-item">App Store / Google Play</li>
						<li class="skill-item">Analytics</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- 経歴 -->
		<section class="experience-section">
			<h2 class="section-title">Experience</h2>
			<div class="timeline">
				<div class="timeline-item">
					<div class="timeline-date">2022 - 株式会社エバーセンス</div>
					<div class="timeline-content">
						<h3 class="timeline-title">モバイルアプリエンジニア</h3>
						<p class="timeline-description">
							複数のモバイルアプリ開発を担当<br>
							新規アプリの設計、SwiftUI・Jetpack Composeの導入などの経験を積む<br>
						</p>
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-date">2022 - 2023 Sweeep株式会社</div>
					<div class="timeline-content">
						<h3 class="timeline-title">モバイルアプリエンジニア(業務委託)</h3>
						<p class="timeline-description">
							Flutterアプリの開発を担当<br>
							CI/CDの導入など主に品質向上に貢献<br>
						</p>
					</div>
				</div>
				<div class="timeline-item">
					<div class="timeline-date">2020 - 2022 株式会社CAC</div>
					<div class="timeline-content">
						<h3 class="timeline-title">モバイルアプリエンジニア</h3>
						<p class="timeline-description">
							企業向けのモバイルアプリ開発リーダーを担当。<br>
							iOS、Androidの開発からFlutterへの移行を実行。
							チーム開発でのプロジェクトマネジメント経験や新人教育経験を積む。
						</p>
					</div>
				</div>
				
				<div class="timeline-item">
					<div class="timeline-date">2019 - 2020 ヤフー株式会社</div>
					<div class="timeline-content">
						<h3 class="timeline-title">バックエンドエンジニア</h3>
						<p class="timeline-description">
							Yahooカーナビのバックエンド開発を担当。<br>
							主に渋滞情報データの取得、加工、保存、提供を担当。<br>
							データ加工、バッチ処理を担当。<br>
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- お問い合わせ -->
		<section class="contact-section">
			<h2 class="section-title">Contact</h2>
			<p class="contact-description">
				プロジェクトのご相談やお仕事のご依頼は、お気軽にお問い合わせください。
			</p>
			<div class="contact-actions">
				<a href="/contact" class="btn-primary">お問い合わせ</a>
				<a href="/products" class="btn-outline">制作実績を見る</a>
			</div>
		</section>
	</div>
</section>

<style>
	.about-section {
		padding: 3rem 2rem;
		min-height: 70vh;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	/* ヘッダー */
	.about-header {
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

	.page-subtitle {
		font-size: 1.125rem;
		color: #666;
		margin: 0;
	}

	/* セクション共通 */
	.profile-section,
	.skills-section,
	.experience-section,
	.contact-section {
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 2rem 0;
		text-align: center;
	}

	/* プロフィール */
	.profile-content {
		background-color: #fafafa;
		padding: 2rem;
		border-radius: 12px;
	}

	.profile-info {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.profile-text {
		flex: 1;
	}

	.name {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 0.5rem 0;
	}

	.title {
		font-size: 1.125rem;
		color: #666;
		margin: 0 0 1.5rem 0;
		font-weight: 500;
	}

	.description {
		color: #555;
		line-height: 1.7;
		margin: 0;
	}

	/* スキル */
	.skills-categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.skill-category {
		background-color: white;
		padding: 1.5rem;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
	}

	.category-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.skill-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.skill-item {
		color: #555;
		padding: 0.5rem 0;
		border-bottom: 1px solid #f3f4f6;
	}

	.skill-item:last-child {
		border-bottom: none;
	}

	/* 経歴 */
	.timeline {
		position: relative;
		padding-left: 2rem;
	}

	.timeline:before {
		content: '';
		position: absolute;
		left: 0.75rem;
		top: 0;
		height: 100%;
		width: 2px;
		background-color: #e5e5e5;
	}

	.timeline-item {
		position: relative;
		margin-bottom: 2rem;
		padding-left: 2rem;
	}

	.timeline-item:before {
		content: '';
		position: absolute;
		left: -0.5rem;
		top: 0.25rem;
		width: 12px;
		height: 12px;
		background-color: #111;
		border-radius: 50%;
	}

	.timeline-date {
		font-size: 0.875rem;
		color: #666;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.timeline-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #111;
		margin: 0 0 0.5rem 0;
	}

	.timeline-description {
		color: #555;
		line-height: 1.6;
		margin: 0;
	}

	/* お問い合わせ */
	.contact-section {
		text-align: center;
		background-color: #fafafa;
		padding: 3rem 2rem;
		border-radius: 12px;
	}

	.contact-description {
		color: #666;
		font-size: 1.125rem;
		line-height: 1.6;
		margin: 0 0 2rem 0;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.contact-actions {
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
		.about-section {
			padding: 2rem 1rem;
		}

		.page-title {
			font-size: 2.5rem;
		}

		.profile-info {
			flex-direction: column;
			text-align: center;
		}

		.skills-categories {
			grid-template-columns: 1fr;
		}

		.timeline {
			padding-left: 1rem;
		}

		.timeline-item {
			padding-left: 1.5rem;
		}

		.contact-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-outline {
			width: 200px;
			text-align: center;
		}
	}
</style>
