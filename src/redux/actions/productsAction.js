import axios from 'axios'
import { GET_PRODUCTS } from './Types'

export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get('products')
        dispatch({ type: GET_PRODUCTS, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}