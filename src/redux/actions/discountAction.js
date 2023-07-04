import { toast } from "react-toastify"
import { supabase } from "../../index"
import { GET_DISCOUNTS, LOADED, LOADING } from "../Types"

export const getDiscounts = () => async dispatch => {
    dispatch({ type: LOADING })
    const { data: discounts, error } = await supabase.from('discounts').select()
    if (!error) {
        dispatch({ type: GET_DISCOUNTS, payload: discounts })
    } else {
        toast(error.message)
    }
    dispatch({ type: LOADED })
}