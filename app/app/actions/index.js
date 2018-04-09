import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from './../../actionTypes';

import {fetchArticles as fetchArticlesApi} from '../api';

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