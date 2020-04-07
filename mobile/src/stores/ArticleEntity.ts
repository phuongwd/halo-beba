/**
 * Article entity used by stores.
 */
export class ArticleEntity {
    id: number = 0;
    title: string = '';
    coverImageUrl: string = '';
    coverImageLocalPath: string = '';
    youTubeVideoId: string = '';
    categoryId: number = 0;
    tagsIds: number[] = [];
    bodyHTML: string = '';
}