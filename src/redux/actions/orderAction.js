import { toast } from "react-toastify"
import { supabase } from "../../index"
import { GET_ORDERS, LOADED, LOADING } from "../Types"

export const getOrders = () => async (dispatch) => {
    dispatch({ type: LOADING })
    const { data: orders, error } = await supabase.from('orders').select()
    if (!error) {
        dispatch({ type: GET_ORDERS, payload: orders })
    } else {
        toast(error.message)
    }
    dispatch({ type: LOADED })
}