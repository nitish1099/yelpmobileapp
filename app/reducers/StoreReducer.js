import {
    GET_BUSINESSES_START,
    GET_BUSINESSES_SUCCESS,
    GET_BUSINESSES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
	businesses: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case GET_BUSINESSES_START:
            return {
                ...INITIAL_STATE,
                loading: true,
            };
        case GET_BUSINESSES_SUCCESS:
            return {
                ...state,
                businesses: action.payload.businesses,
                loading: false,
            };
        case GET_BUSINESSES_ERROR:
            return {
                ...INITIAL_STATE,
            };
		default:
			return state;
	}
};
