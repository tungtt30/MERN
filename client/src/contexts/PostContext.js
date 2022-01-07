import { createContext, useReducer } from "react";
import { postReducer } from "../reducers/PostReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    //state 
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true
    })
    //get all post 
    const getPosts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if (response.data.success) {
                dispatch({ type: 'POSTS_LOADED_SUCCESS', payload: response.data.posts })
            }
        } catch (error) {
           dispatch({type: 'POSTS_LOADED_FALSE'})
        }
    }
    // post context data 
    const postContextData = { postState, getPosts }
    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>

    )
}
export default PostContextProvider



