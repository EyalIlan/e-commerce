//this file is where the action of each function happend
import {
      PRODUCT_LIST_REQUEST
    , PRODUCT_LIST_SUCCESS
    , PRODUCT_LIST_FAIL,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL
} 
from '../constants/productConstant'

import Axios from 'axios'

export const listProducts = () => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await Axios.get('/product')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL
            , payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const ProductDetails = (id) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        
        const { data } = await Axios.get(`/product/${id}`)
        
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL
            , payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

