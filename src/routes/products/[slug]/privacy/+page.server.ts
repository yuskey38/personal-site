import { detectRegion, getPrivacyPolicyByRegion, getProductData } from '$lib/content';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// ikkokusha.com へ移転したプライバシーポリシー（公開済みアプリがこの URL を開くため恒久リダイレクトで残す）
const MOVED_PRIVACY_POLICIES: Record<string, { jp: string; other: string }> = {
    'family-album-video-splitter': {
        jp: 'https://ikkokusha.com/products/family-album-video-splitter/privacy',
        other: 'https://ikkokusha.com/products/family-album-video-splitter/privacy-en'
    }
};

export const load: PageServerLoad = async ({ params, request }) => {
    // リクエストから地域を判定
    const region = detectRegion(request);

    const moved = MOVED_PRIVACY_POLICIES[params.slug];
    if (moved) {
        redirect(301, moved[region]);
    }
    
    const [privacyMarkdown, productData] = await Promise.all([
        getPrivacyPolicyByRegion(params.slug, region),
        getProductData(params.slug)
    ]);
    
    if (!privacyMarkdown || !productData) {
        throw error(404, 'Privacy policy not found');
    }

    return {
        privacyMarkdown,
        productName: productData.name,
        productId: params.slug,
        region, // フロントエンドで表示言語を判定するために追加
        isEnglish: region === 'other'
    };
}; 