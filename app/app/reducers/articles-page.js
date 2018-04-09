import R from 'ramda';
import {
    FETCH_ARTICLES_SUCCESS
} from './../../actionTypes';

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_ARTICLES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        default:
            return state
    }
}