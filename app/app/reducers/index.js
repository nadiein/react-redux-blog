import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import articlesPage from './articles-page';
import articlePage from './article-page';
import bookmarks from './bookmarks';

export default combineReducers({
    routing: routerReducer,
    articles,
    articlesPage,
    articlePage,
    bookmarks
})