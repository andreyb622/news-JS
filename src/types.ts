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

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum StatusCode {
    Unauthorized = 401,
    NotFound = 404,
}

export type QueryOptions = {
    apiKey: string;
    sources: string;
};

export type RequestParams = {
    endpoint: Endpoint;
    options?: Partial<QueryOptions>;
};

export type Callback<T> = (data: T) => void;
