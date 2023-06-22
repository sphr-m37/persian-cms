import React from 'react'
import { GET_COMMENTS } from '../actions/Types'


const init = {
    comments: []
}


export const commentsReducer = (state = init, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return { ...state, comments: action.payload }
        default:
            return state
    }
}
