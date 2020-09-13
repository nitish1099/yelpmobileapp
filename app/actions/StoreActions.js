import axios from 'axios';
import { Alert } from 'react-native';
import {
    GET_BUSINESSES_START,
    GET_BUSINESSES_SUCCESS,
    GET_BUSINESSES_ERROR,
} from './types';

import config from '../config';

export const getBusinesses = () => async dispatch => {
    dispatch({
        type: GET_BUSINESSES_START,
    });
    axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        url: `${config.BASE_URL}/api`,
    })
    .then(response => {
        dispatch({
            type: GET_BUSINESSES_SUCCESS,
            payload: { businesses: response.data.result.businesses },
        });
    })
    .catch(error => {
        Alert.alert('Something went wrong!');
        dispatch({
            type: GET_BUSINESSES_ERROR,
        });
    });
};
