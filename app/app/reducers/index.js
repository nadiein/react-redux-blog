import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import articlesPage from './articles-page';

export default combineReducers({
    routing: routerReducer,
    articles,
    articlesPage
})