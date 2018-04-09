import articles from './data';

export const fetchArticles = async() => {
    return new Promise((resolve) => {
        resolve(articles)
    })
}