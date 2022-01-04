import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'



const RegisterForm = () => {
    return (
        <>
            <Form className='my-4'>
                <Form.Group>
                    <Form.Control type='text' placeholder='Username' name='username' style={{margin:'10px 0'}} required />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Password' name='password' style={{margin:'10px 0'}} required />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Confirm Password' name='Confirmpassword' style={{margin:'10px 0'}} required />
                </Form.Group>
                <Button variant='success' type='submit'>Register</Button>
            </Form>
            <p> Have an account ???  
                <Link to='/login'>
                    <Button variant='info' size='sm' style={{margin:'0 10px'}} className='ml-2'> Login </Button>
                </Link>
            </p>
        </>
    )

}

export default RegisterForm