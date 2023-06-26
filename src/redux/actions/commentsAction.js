import axios from "axios"
import { GET_COMMENTS } from "../Types"

export const getComments = () => async dispatch => {
    const res = await axios.get('comments')
    dispatch({ type: GET_COMMENTS, payload: res.data })
}