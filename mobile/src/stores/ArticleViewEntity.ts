/**
 * Article entity used by views.
 */
export class ArticleViewEntity {
    id: number = 0;
    title: string = '';
    coverImageUrl: string = '';
    coverImageLocalPath: string = '';
    category: {id:number, name:string} = {id:0, name:''};
    tags: {id:number, name:string}[] = [];
    bodyHTML: string = '';
}