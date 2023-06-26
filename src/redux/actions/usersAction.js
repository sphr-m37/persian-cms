import axios from "axios"
import { GET_USERS } from "../Types"

export const getUsers = () => async dispatch => {
    try {
         const res = await axios.get('users')
    dispatch({type :GET_USERS , payload : res.data})
    } catch (error) {
        console.log(error)
    }
   
}