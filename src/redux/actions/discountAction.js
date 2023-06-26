import axios from "axios"
import { GET_DISCOUNTS } from "../Types"

export const getDiscounts = () => async dispatch => {
    const res = await axios.get('discounts')
    dispatch({type:GET_DISCOUNTS,payload:res.data})
}