import { GET_PRODUCTS } from "../actions/Types"

const init = {
    products: []
}

export const productsReducer = (state = init, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}
