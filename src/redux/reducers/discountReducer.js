import React from 'react'
import { GET_DISCOUNTS, LOADED, LOADING } from '../Types'
const init = {
    discounts: [],
    loading: false

}
export const discountReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DISCOUNTS:
            return { state, discounts: action.payload }
        case LOADING:
            return { ...state, loading: true }
        case LOADED:
            return { ...state, loading: false }
        default:
            return state
    }
}
