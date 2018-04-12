import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import articlesPage from './articles-page';
import articlePage from './article-page';

export default combineReducers({
    routing: routerReducer,
    articles,
    articlesPage,
    articlePage
})