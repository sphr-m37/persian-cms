import { GET_COMMENTS, LOADED, LOADING } from '../Types'

const init = {
    comments: [],
    loading: false
}

export const commentsReducer = (state = init, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return { ...state, comments: action.payload }
        case LOADING:
            return { ...state, loading:true }
        case LOADED:
            return { ...state, loading:false }
        default:
            return state;
    }
}
