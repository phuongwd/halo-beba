import { ArticlesSectionData } from "../screens/home/ArticlesSection";

const articlesList1 = [
    {
        id: 2,
        title: 'Kada dete počinje sa komunikacijom',
        coverImageUrl: 'https://i.pinimg.com/originals/0a/91/19/0a9119e202ffa8618cbac18c2a323e43.jpg',
        coverImageLocalPath: '',
        bodyHTML: `<p>Amet <b>aliquip</b> nisi ex et proident et proident laborum. Occaecat eu sint esse dolore sunt adipisicing ut proident ad. Amet laborum qui consequat sit magna amet ullamco enim ex ut pariatur in nostrud eu. Eu nulla ipsum nostrud reprehenderit tempor eiusmod. Nulla fugiat consequat adipisicing occaecat consectetur aliquip adipisicing ut irure ea. Exercitation in adipisicing duis adipisicing deserunt commodo enim nostrud incididunt irure do deserunt.</p>
                    <p>Adipisicing exercitation ea tempor Lorem cupidatat ad commodo excepteur dolor. Consequat irure exercitation voluptate deserunt tempor quis in id sunt fugiat magna. Excepteur consequat incididunt duis aliqua eiusmod.</p>
        `,
        category: {id:1, name:'Razvojni dogadjaji'},
        tags: [
            {id:1, name:'tag1'},
        ]
    },

    {
        id: 3,
        title: 'Kako podsticati dete za druženje',
        coverImageUrl: 'https://www.newsmobile.in/wp-content/uploads/2017/08/Happy-Mother-And-Happy-Baby-In-The-Bed.jpg',
        coverImageLocalPath: '',
        bodyHTML: `<p>Amet <b>aliquip</b> nisi ex et proident et proident laborum. Occaecat eu sint esse dolore sunt adipisicing ut proident ad. Amet laborum qui consequat sit magna amet ullamco enim ex ut pariatur in nostrud eu. Eu nulla ipsum nostrud reprehenderit tempor eiusmod. Nulla fugiat consequat adipisicing occaecat consectetur aliquip adipisicing ut irure ea. Exercitation in adipisicing duis adipisicing deserunt commodo enim nostrud incididunt irure do deserunt.</p>
                    <p>Adipisicing exercitation ea tempor Lorem cupidatat ad commodo excepteur dolor. Consequat irure exercitation voluptate deserunt tempor quis in id sunt fugiat magna. Excepteur consequat incididunt duis aliqua eiusmod.</p>
        `,
        category: {id:1, name:'Razvojni dogadjaji'},
        tags: [
            {id:1, name:'tag1'},
        ]
    },

    {
        id: 4,
        title: 'Kada je dete spremno da sedi?',
        coverImageUrl: 'https://www.theindianiris.com/wp-content/uploads/2016/06/baby-mom.jpg',
        coverImageLocalPath: '',
        bodyHTML: `<p>Amet <b>aliquip</b> nisi ex et proident et proident laborum. Occaecat eu sint esse dolore sunt adipisicing ut proident ad. Amet laborum qui consequat sit magna amet ullamco enim ex ut pariatur in nostrud eu. Eu nulla ipsum nostrud reprehenderit tempor eiusmod. Nulla fugiat consequat adipisicing occaecat consectetur aliquip adipisicing ut irure ea. Exercitation in adipisicing duis adipisicing deserunt commodo enim nostrud incididunt irure do deserunt.</p>
                    <p>Adipisicing exercitation ea tempor Lorem cupidatat ad commodo excepteur dolor. Consequat irure exercitation voluptate deserunt tempor quis in id sunt fugiat magna. Excepteur consequat incididunt duis aliqua eiusmod.</p>
        `,
        category: {id:1, name:'Razvojni dogadjaji'},
        tags: [
            {id:1, name:'tag1'},
        ]
    },

    {
        id: 4,
        title: 'Prepoznavanje lica roditelja',
        coverImageUrl: 'https://lh3.googleusercontent.com/proxy/Pe26T902LBTNHu4qDtz05tCmWGKW_Bc9T7eaLOhDdJwCYOAYFRNxcKjBcq1wAcPHNJmTvaI4EPQlZoRPy4FnKJh25q2EIC4_hhpYCfpCgRI43JINsE1TAuS3UtiEh0jSrw',
        coverImageLocalPath: '',
        bodyHTML: `<p>Amet <b>aliquip</b> nisi ex et proident et proident laborum. Occaecat eu sint esse dolore sunt adipisicing ut proident ad. Amet laborum qui consequat sit magna amet ullamco enim ex ut pariatur in nostrud eu. Eu nulla ipsum nostrud reprehenderit tempor eiusmod. Nulla fugiat consequat adipisicing occaecat consectetur aliquip adipisicing ut irure ea. Exercitation in adipisicing duis adipisicing deserunt commodo enim nostrud incididunt irure do deserunt.</p>
                    <p>Adipisicing exercitation ea tempor Lorem cupidatat ad commodo excepteur dolor. Consequat irure exercitation voluptate deserunt tempor quis in id sunt fugiat magna. Excepteur consequat incididunt duis aliqua eiusmod.</p>
        `,
        category: {id:1, name:'Razvojni dogadjaji'},
        tags: [
            {id:1, name:'tag1'},
        ]
    },
];

export const articlesSectionAllData: ArticlesSectionData = {
    title: 'Razvoj dece',
    
    featuredArticle: {
        id: 1,
        title: 'Detetov razvoj sa 4 meseca: Šta da očekujete?',
        coverImageUrl: 'https://lh5.googleusercontent.com/proxy/SKqjyz51CmvPZsturrLULQZWilCdYNUaQ0X08mkQ7gRgOe0_a_5XdMAqbEaxCEVuR7mKMjdtFDxlCYYny6sgnTKXyZopk1p2oOVI6KpCVLRshqErEFBb',
        coverImageLocalPath: '',
        bodyHTML: `<p>Amet <b>aliquip</b> nisi ex et proident et proident laborum. Occaecat eu sint esse dolore sunt adipisicing ut proident ad. Amet laborum qui consequat sit magna amet ullamco enim ex ut pariatur in nostrud eu. Eu nulla ipsum nostrud reprehenderit tempor eiusmod. Nulla fugiat consequat adipisicing occaecat consectetur aliquip adipisicing ut irure ea. Exercitation in adipisicing duis adipisicing deserunt commodo enim nostrud incididunt irure do deserunt.</p>
                    <p>Adipisicing exercitation ea tempor Lorem cupidatat ad commodo excepteur dolor. Consequat irure exercitation voluptate deserunt tempor quis in id sunt fugiat magna. Excepteur consequat incididunt duis aliqua eiusmod.</p>
        `,
        category: {id:1, name:'Razvojni dogadjaji'},
        tags: [
            {id:1, name:'tag1'},
        ]
    },

    otherFeaturedArticles: articlesList1,

    categoryArticles: [
        {
            categoryId: 2,
            categoryName: 'Ishrana i dojenje',
            articles: articlesList1
        },

        {
            categoryId: 3,
            categoryName: 'Detetovo zdravlje',
            articles: articlesList1
        },
    ],
};