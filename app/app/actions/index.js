import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    LOAD_MORE_START,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_FAILURE,
    FETCH_ARTICLE_BY_ID_START,
    FETCH_ARTICLE_BY_ID_SUCCESS,
    FETCH_ARTICLE_BY_ID_FAILURE
} from './../../actionTypes';

import {getRenderedArticlesLength} from '../../selectors';
import {
    fetchArticles as fetchArticlesApi,
    loadMoreArticles as loadMoreArticlesApi,
    fetchArticleById as fetchArticleByIdApi
} from '../api';

export const fetchArticles = () => async dispatch => {
    dispatch({type: FETCH_ARTICLES_START})

    try {
        const articles = await fetchArticlesApi()
        dispatch({
            type: FETCH_ARTICLES_SUCCESS,
            payload: articles
        })
    } catch(err) {
        dispatch({
            type: FETCH_ARTICLES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const loadMore = () => async (dispatch, getState) => {
    const offset = getRenderedArticlesLength(getState());

    dispatch({type: LOAD_MORE_START})

    try {
        const articles = await loadMoreArticlesApi({offset})
        dispatch({
            type: LOAD_MORE_SUCCESS,
            payload: articles
        })
    } catch(err) {
        dispatch({
            type: LOAD_MORE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchArticleById = (id) => async dispatch => {
    dispatch({type: FETCH_ARTICLE_BY_ID_START});

    try {
        const article = await fetchArticleByIdApi(id);
        dispatch({
            type: FETCH_ARTICLE_BY_ID_SUCCESS,
            payload: article
        })
    } catch(err) {
        dispatch({
            type: FETCH_ARTICLE_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}