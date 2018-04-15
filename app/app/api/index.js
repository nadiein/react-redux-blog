import R from 'ramda';

import articles from './data';

export const fetchArticles = async() => {
    return new Promise((resolve) => {
        resolve(articles)
    })
}

export const loadMoreArticles = async({offset}) => {
    return new Promise((resolve) => {
        resolve(articles)
    })
}

export const fetchArticleById = async(id) => {
    return new Promise((resolve, reject) => {
        const article = R.find(R.propEq('id', id), articles)
        resolve(article)
    })
}