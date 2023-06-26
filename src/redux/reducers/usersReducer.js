import { GET_USERS } from "../Types"

const init = {
    users: [],
    loading: false
}

export const usersReducer = (state = init, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}
