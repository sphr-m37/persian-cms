import { GET_PRODUCTS } from "../Types"

const init = {
    products: [],
    loading: false
}

export const productsReducer = (state = init, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}
