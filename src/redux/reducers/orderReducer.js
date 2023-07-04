import React from 'react'
import { GET_ORDERS, LOADED, LOADING } from '../Types'
const init = {
    orders: [],
    loading: false
}
export const orderReducer = (state = init, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return { ...state, orders: action.payload }
        case LOADING:
            return { ...state, loading: true }
        case LOADED:
            return { ...state, loading: false }
        default:
            return state
    }
}
