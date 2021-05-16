
// in this file is where we return the the state of each function

import {
    PRODUCT_LIST_REQUEST
    ,PRODUCT_LIST_SUCCESS
    ,PRODUCT_LIST_FAIL
    , PRODUCT_DETAILS_REQUEST
    , PRODUCT_DETAILS_SUCCESS
    , PRODUCT_DETAILS_FAIL}  
    from '../constants/productConstant'

export const productListReducer = (state = {products:[]} ,action) =>{

    // action.payload -  what comes back from the action 
    switch(action.type){

        case PRODUCT_LIST_REQUEST:
              return {loading: true,products:[]}
        case PRODUCT_LIST_SUCCESS:
              return {loading:false,products: action.payload}
        case PRODUCT_LIST_FAIL:
              return {loading:false,error:action.payload} 
        default:
             return state
    }
}

export const productDetailsReducer = (state = {product:{reviews:[]}} ,action) =>{

    // action.payload -  what comes back from the action 
    switch(action.type){

        case PRODUCT_DETAILS_REQUEST:
              return {loading: true,...state}
        case PRODUCT_DETAILS_SUCCESS:
              return {loading:false,product: action.payload}
        case PRODUCT_DETAILS_FAIL:
              return {loading:false,error:action.payload} 
        default:
             return state
    }
}
