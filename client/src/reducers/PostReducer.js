import { ADD_POST, POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS } from "../contexts/constants"

export const postReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                posts: payload,
                postsLoading: false
            }
        case POSTS_LOADED_FAIL:
            return {
                ...state,
                posts: [],
                postsLoading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts],
                postsLoading: false
            }


        default:
            return state
    }
}