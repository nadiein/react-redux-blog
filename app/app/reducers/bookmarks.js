import R from 'ramda';

import {
    ADD_ARTICLE_TO_BOOKMARK
} from './../../actionTypes';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_ARTICLE_TO_BOOKMARK:
            return R.append(payload, state)
        default:
            return state
    }
} 