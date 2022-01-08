import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'




const AddPostModal = () => {
    //context
    const {showAddPostModal, setShowAddPostModal} = useContext(PostContext)

    const closeDialog = () => {
        setShowAddPostModal(false)
    }

    return (
    
        <Modal show={showAddPostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Whatsupp</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group className='my-2'>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control as='textarea' rows={3} placeholder='Description' name='description' />
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control type='text' placeholder='URL' name='url' />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant='primary' type='submit'>Go!!</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        
    )
}
export default AddPostModal