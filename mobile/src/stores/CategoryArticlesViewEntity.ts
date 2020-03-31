import { ArticleViewEntity } from "./ArticleViewEntity";

/**
 * Category with articles used by views.
 */
export class CategoryArticlesViewEntity {
    categoryId: number = 0;
    categoryName: string = '';
    articles: ArticleViewEntity[] = [];
}