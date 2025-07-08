import { detectRegion, getPrivacyPolicyByRegion, getProductData } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, request }) => {
    // リクエストから地域を判定
    const region = detectRegion(request);
    
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