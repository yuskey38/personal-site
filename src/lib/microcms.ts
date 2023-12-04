import { createClient, type MicroCMSQueries, type MicroCMSImage } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
const client = createClient({
    serviceDomain: MICROCMS_SERVICE_DOMAIN,
    apiKey: MICROCMS_API_KEY,
});

//型定義
export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch?: MicroCMSImage;
};
export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
};

//APIの呼び出し
export const getList = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    let blogDetail: Blog = await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries,
    });

    blogDetail.content = imageResizedHtml(blogDetail.content);
    return blogDetail;
};

function imageResizedHtml(html: string) {
    return html.replace(/<img\s+src="([^"]+)"[^>]*>/g, (_, srcAttr) => {
        const srcWithoutQueryParams = srcAttr.split('?')[0]
        return `<a href="${srcWithoutQueryParams}"><img src="${srcWithoutQueryParams}" alt="" style="max-width: 75%; height: auto;"></a>`;
    });
}