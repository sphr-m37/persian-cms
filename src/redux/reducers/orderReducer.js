import React from 'react'
import { GET_ORDERS } from '../Types'
const init = {
    orders: [],
    loading: false
}
export const orderReducer = (state = init, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return { ...state, orders: action.payload }
        default:
            return state
    }
}
