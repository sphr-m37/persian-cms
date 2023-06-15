import { GET_USERS } from "../actions/Types"

const init = {
    users: []
}

export const usersReducer = (state = init, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}
