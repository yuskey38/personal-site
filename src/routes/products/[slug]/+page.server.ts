import { getProductData } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const product = await getProductData(params.slug);
    
    if (!product) {
        throw error(404, 'Product not found');
    }

    return {
        product
    };
}; 