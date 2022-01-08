import { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducers/PostReducer";
import { apiUrl, POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL, ADD_POST } from "./constants";
import axios from "axios";

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    //state 
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true
    })
    //Modal handle
    const [showAddPostModal, setShowAddPostModal] = useState(false)


    //get all post 
    const getPosts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if (response.data.success) {
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
            }
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }
    // Add post
    const addPost = async newPost => {
        try {
            const response = await axios.post(`${apiUrl}/posts`, newPost)
            if (response.data.success) {
                dispatch({ type: ADD_POST, payload: response.data.posts })
                return response.data
            }
        } catch (error) {
            return error.response.data ? error.response.data : { success: false, message: 'Server error' }
        }
    }


    // post context data 
    const postContextData = { postState, getPosts, showAddPostModal, setShowAddPostModal, addPost }
    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>

    )
}
export default PostContextProvider



