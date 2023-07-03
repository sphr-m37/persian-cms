import { toast } from "react-toastify"
import { supabase } from "../../index"
import { GET_ORDERS } from "../Types"

export const getOrders = () => async (dispatch) => {
    const { data: orders, error } = await supabase.from('orders').select()
    if (!error) {
        dispatch({ type: GET_ORDERS, payload: orders })
        console.log(orders)
    } else {
        toast(error.message)
    }
}