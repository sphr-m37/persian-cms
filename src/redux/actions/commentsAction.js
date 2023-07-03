import { supabase } from "../../index"
import { GET_COMMENTS } from "../Types"

export const getComments = () => async dispatch => {
    const { data: comments, error } = await supabase.from('comments').select()
    if (!error) {
        dispatch({ type: GET_COMMENTS, payload: comments })
    } else {
       console.log(error)
    }
}