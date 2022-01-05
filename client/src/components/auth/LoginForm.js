import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useHistory } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginForm = () => {
    //context 
    const { loginUser } = useContext(AuthContext)

    //router 
    const history = useHistory()


    //local state 
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const { username, password } = loginForm
    const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
             if (loginData.success) {
                 history.push('/dashboard')
             } else {
                 
             }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <Form className='my-4' onSubmit={login}>
                <Form.Group>
                    <Form.Control type='text' placeholder='Username' value={username} onChange={onChangeLoginForm} name='username' style={{ margin: '10px 0' }} required />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Password' value={password} onChange={onChangeLoginForm} name='password' style={{ margin: '10px 0' }} required />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
            </Form>
            <p> Don't have an account?
                <Link to='/register'>
                    <Button variant='info' size='sm' style={{ margin: '0 10px' }} className='ml-2'> Register </Button>
                </Link>
            </p>
        </>
    )


}

export default LoginForm