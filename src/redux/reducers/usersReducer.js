import { GET_USERS, LOADED, LOADING } from "../Types"

const init = {
    users: [],
    loading: false
}

export const usersReducer = (state = init, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }
        case LOADING:
            return { ...state, loading: true }
        case LOADED:
            return { ...state, loading: false }
        default:
            return state
    }
}
