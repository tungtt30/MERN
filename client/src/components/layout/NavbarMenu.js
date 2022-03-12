import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItlogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'






const NavbarMenu = () => {

    const { authState: { user: { username } }, logoutUser } = useContext(AuthContext)



    const logout = () => {
        logoutUser()
    }


    return (


        <Navbar expand='lg' bg='black' variant='dark' className='shadow navbar' style={
            {
                position: 'fixed',
                zIndex: '1',
                width: '100%',
                top: '0',
                padding: '8px 5px'
            }
        } >
            <Navbar.Brand className='font-weight-bolder text-white' >
                <img
                    src={learnItlogo}
                    alt="image"
                    width='25'
                    height='25'
                    className='mr-5'
                />
                GodSeeker
            </ Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' >
                <Nav className='' >
                    <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                        To do list
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/nir' as={Link}>
                        Mp3
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/upload' as={Link}>
                        Upload
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/covid' as={Link}>
                        Covid-19
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/weather' as={Link}>
                        Weather
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/test1' as={Link}>
                        Test 1
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/test2' as={Link}>
                        Test 2
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>
                        About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <Nav.Link className='font-weight-bolder text-white' disabled >
                    Welcome {username}
                </Nav.Link>
                <Button variant='dark' className='font-weight-bolder text-white  rounded' onClick={logout}>
                    <img src={logoutIcon} alt="logout" width='25' height='25' className='mr-2' />
                    Logout
                </Button>
            </Nav>
        </Navbar>

    )
}

export default NavbarMenu



