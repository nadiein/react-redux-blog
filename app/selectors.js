import R from 'ramda';

export const getArticleById = (state, id) => R.prop(id, state.articles);

export const getArticles = state => {
    const articles = R.map(id => getArticleById(state, id), state.articlesPage.ids)
    return articles
}

export const getRenderedArticlesLength = state => R.length(state.articlesPage.ids);

export const getTotalBookmarksCount = state => R.length(state.bookmarks);

export const getTotalBookmarks = state => {
    const totalBookmarks = R.compose(
        R.pluck('name'),
        R.map(id => getArticleById(state, id))
    )(state.bookmarks)
    return totalBookmarks
}