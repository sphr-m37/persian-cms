import { supabase } from "../../index"
import { GET_USERS } from "../Types"

export const getUsers = () => async dispatch => {
    const { data: users, error } = await supabase.from('users').select()
    if (!error) {
        dispatch({ type: GET_USERS, payload: users })
    } else {
        toast(error.message)
    }
}