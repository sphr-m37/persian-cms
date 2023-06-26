import axios from "axios"
import { GET_ORDERS } from "../Types"

export const getOrders = () => async dispatch => {
    const res = await axios.get('orders')
    dispatch({ type: GET_ORDERS, payload: res.data })
}