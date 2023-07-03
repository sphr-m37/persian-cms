import { GET_PRODUCTS } from '../Types'
import { supabase } from '../../supbase/supabase'
import { toast } from 'react-toastify'

export const getProducts = () => async (dispatch) => {
    const { data: products, error } = await supabase.from('products').select()
    if (!error) {
        dispatch({ type: GET_PRODUCTS, payload: products })
    } else {
        toast(error.message)
    }
}