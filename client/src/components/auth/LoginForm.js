import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'


const LoginForm = () => {
    return (
        <>
            <Form className='my-4'>
                <Form.Group>
                    <Form.Control type='text' placeholder='Username' name='username' style={{margin:'10px 0'}} required />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Password' name='password' style={{margin:'10px 0'}} required />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
            </Form>
            <p> Don't have an account? 
                <Link to='/register'>
                    <Button variant='info' size='sm' style={{margin:'0 10px'}} className='ml-2'> Register </Button>
                </Link>
            </p>
        </>
    )


}

export default LoginForm