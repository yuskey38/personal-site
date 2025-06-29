import { getPrivacyPolicy, getProductData } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const [privacyMarkdown, productData] = await Promise.all([
        getPrivacyPolicy(params.slug),
        getProductData(params.slug)
    ]);
    
    if (!privacyMarkdown || !productData) {
        throw error(404, 'Privacy policy not found');
    }

    return {
        privacyMarkdown,
        productName: productData.name,
        productId: params.slug
    };
}; 