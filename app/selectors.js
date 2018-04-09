import R from 'ramda';

const getArticleById = (state, id) => R.prop(id, state.articles);

export const getArticles = state => {
    const articles = R.map(id => getArticleById(state, id), state.articlesPage.ids)
    return articles
}