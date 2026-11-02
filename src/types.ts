export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISourcesResponse {
    status: string;
    sources: ISource[];
}

export interface IArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}
