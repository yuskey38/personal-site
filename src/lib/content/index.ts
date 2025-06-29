// コンテンツ管理ユーティリティ


/**
 * プライバシーポリシーのマークダウンを取得（ビルド時読み込み）
 */
export async function getPrivacyPolicy(appId: string): Promise<string | null> {
    try {
        const module = await import(`./privacy/${appId}.md?raw`);
        return module.default;
    } catch (error) {
        console.error(`Failed to load privacy policy for ${appId}:`, error);
        return null;
    }
}

/**
 * プロダクト情報のマークダウンを取得（ビルド時読み込み）
 */
export async function getProductInfo(appId: string): Promise<string | null> {
    try {
        const module = await import(`./products/${appId}.md?raw`);
        return module.default;
    } catch (error) {
        console.error(`Failed to load product info for ${appId}:`, error);
        return null;
    }
}

/**
 * 基本的なマークダウンをHTMLに変換
 */
export function parseMarkdown(markdown: string): string {
    return markdown
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^\* (.*$)/gm, '<li>$1</li>')
        .replace(/^- (.*$)/gm, '<li>$1</li>')
        .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[hl]|<li|<p)(.+)$/gm, '<p>$1</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>')
        .trim();
}

/**
 * メタデータ付きマークダウンの解析
 */
export function parseMarkdownWithMeta(markdown: string): {
    content: string;
    meta: Record<string, any>;
} {
    const lines = markdown.split('\n');
    const meta: Record<string, any> = {};
    let contentStart = 0;

    // Front matter の解析（オプション）
    if (lines[0] === '---') {
        for (let i = 1; i < lines.length; i++) {
            if (lines[i] === '---') {
                contentStart = i + 1;
                break;
            }
            const [key, ...valueParts] = lines[i].split(':');
            if (key && valueParts.length > 0) {
                meta[key.trim()] = valueParts.join(':').trim();
            }
        }
    }

    const content = lines.slice(contentStart).join('\n');
    return {
        content: parseMarkdown(content),
        meta
    };
}

/**
 * プロダクト情報をパースしてオブジェクトとして返す
 */
export async function getProductData(appId: string): Promise<any | null> {
    const markdown = await getProductInfo(appId);
    if (!markdown) return null;

    const { content, meta } = parseMarkdownWithMeta(markdown);
    
    // マークダウンから基本情報を抽出
    const lines = markdown.split('\n');
    const product: any = {
        id: appId,
        name: '',
        description: '',
        platform: '',
        status: '',
        detailedDescription: '',
        features: [],
        technologies: [],
        appStoreUrl: null,
        githubUrl: null
    };

    // タイトルを抽出
    const titleMatch = markdown.match(/^# (.+)$/m);
    if (titleMatch) {
        product.name = titleMatch[1].trim();
    }

    // 基本情報を抽出
    const platformMatch = markdown.match(/\*\*プラットフォーム\*\*:\s*(.+)/);
    if (platformMatch) product.platform = platformMatch[1].trim();

    const statusMatch = markdown.match(/\*\*ステータス\*\*:\s*(.+)/);
    if (statusMatch) product.status = statusMatch[1].trim();

    // 概要を抽出
    const overviewMatch = markdown.match(/## 概要\s*\n\n([\s\S]*?)(?=\n## |$)/);
    if (overviewMatch) {
        product.description = overviewMatch[1].trim().split('\n')[0];
        product.detailedDescription = overviewMatch[1].trim();
    }

    // 機能一覧を抽出
    const featuresMatch = markdown.match(/## 主な機能\s*\n\n([\s\S]*?)(?=\n## |$)/);
    if (featuresMatch) {
        const featureLines = featuresMatch[1].trim().split('\n');
        product.features = featureLines
            .filter(line => line.startsWith('- '))
            .map(line => line.substring(2).trim());
    }

    // 技術スタックを抽出
    const techMatch = markdown.match(/## 使用技術\s*\n\n([\s\S]*?)(?=\n## |$)/);
    if (techMatch) {
        const techLines = techMatch[1].trim().split('\n');
        product.technologies = techLines
            .filter(line => line.startsWith('- '))
            .map(line => line.substring(2).trim());
    }

    // リンクを抽出
    const appStoreMatch = markdown.match(/\*\*App Store\*\*:\s*\[([^\]]+)\]\(([^)]+)\)/);
    if (appStoreMatch && appStoreMatch[2] !== '[リンク未設定]') {
        product.appStoreUrl = appStoreMatch[2];
    }

    const githubMatch = markdown.match(/\*\*GitHub\*\*:\s*\[([^\]]+)\]\(([^)]+)\)/);
    if (githubMatch && githubMatch[2] !== '[リンク未設定]') {
        product.githubUrl = githubMatch[2];
    }

    return product;
} 