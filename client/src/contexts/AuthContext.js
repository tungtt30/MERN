import { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/AuthReducer'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import setAuthToken from '../utils/setAuthToken'



const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })
    //authenticate user 
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }
        try {
            const response = await axios.get(`${apiUrl}/auth`)
            if (response.data.success) {
                dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: true, user: response.data.user } })

            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: false, user: null } })
        }
    }


    useEffect(() => loadUser(), [])


    //Login 
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.success)
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }
    // register 
    const registerUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, userForm)
            if (response.data.success)
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    //context data
    // logout fn 
    
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: false, user: null } })
    }
    const authContextData = { loginUser, registerUser, authState, logoutUser }
    //return provider 
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export const AuthContext = createContext()
export default AuthContextProvider