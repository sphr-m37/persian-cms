import React from 'react'
import { GET_DISCOUNTS } from '../Types'
const init = {
    discounts: [],
    loading: false

}
export const discountReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DISCOUNTS:
            return {state , discounts:action.payload}
        default:
            return state
    }
}
