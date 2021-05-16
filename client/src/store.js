import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'


//this is where  we save and inilize the global state


// the reducers we are going to use
const reducer = combineReducers({ 
    productList : productListReducer,
    productDetails:productDetailsReducer
})

const initialState = {
       
}

const middleware = [thunk] // thunk a package helps up deal with async request

const store = createStore(
    reducer
    ,initialState
    ,composeWithDevTools(applyMiddleware(...middleware)))


export default store