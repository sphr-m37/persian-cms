import { GET_PRODUCTS, LOADED, LOADING } from "../Types"

const init = {
    products: [],
    loading: false
}

export const productsReducer = (state = init, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        case LOADING:
            return { ...state, loading: true }
        case LOADED:
            return { ...state, loading: false }
        default:
            return state
    }
}
