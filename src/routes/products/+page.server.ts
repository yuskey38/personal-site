import { getProductData } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // 利用可能なプロダクトID一覧
    const productIds = [
        'family-album-video-splitter',
        // 'sample-app-2',
        // 'sample-app-3'
    ];

    // 各プロダクトデータを並行で読み込み
    const products = await Promise.all(
        productIds.map(async (id) => {
            try {
                return await getProductData(id);
            } catch (error) {
                console.error(`Failed to load product ${id}:`, error);
                return null;
            }
        })
    );

    // nullを除外してフィルター
    const validProducts = products.filter(product => product !== null);

    return {
        products: validProducts
    };
}; 