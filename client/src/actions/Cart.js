import { CART_ADD_ITEM } from '../constants/cartConstants'
import Axios from 'axios'

export const  addToCart = (id,qty) => async (dispatch,getState) =>{

    const {data} = await Axios.get(`/product/${id}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            InStock:data.quentity,
            qty
        }
    })
    localStorage.setItem('cartItems',JSON.stringify (getState().cart.cartItems))
}