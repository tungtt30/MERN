import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'




const UpdatePostModal = () => {
    //context
    const { postState: { post }, setShowToast, showUpdatePostModal, setShowUpdatePostModal, updatePost } = useContext(PostContext)

    // State
    const [updatedPost, setUpdatedPost] = useState(post)
    const { title, description, url, status } = updatedPost

    useEffect(() => setUpdatedPost(post), [post])

    const onChangeUpdatedPostForm = event => setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value })


    const closeDialog = () => {
        setUpdatedPost(post)
        setShowUpdatePostModal(false)
    }
    const onSubmit = async event => {
        event.preventDefault()
        const { success, message } = await updatePost(updatedPost)

        setShowUpdatePostModal(false)

        setShowToast({ show: true, message, type: success ? 'success' : 'danger' })

    }


    return (

        <Modal show={showUpdatePostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Changeee ??</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group className='my-2'>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeUpdatedPostForm} />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control as='textarea' rows={3} placeholder='Description' name='description' value={description} onChange={onChangeUpdatedPostForm} />
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control type='text' placeholder='URL' name='url' value={url} onChange={onChangeUpdatedPostForm} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='select' value={status} name='status' onChange={onChangeUpdatedPostForm}>
                            <option value='TO LEARN'>TO LEARN</option>
                            <option value='LEARNING'>LEARNING</option>
                            <option value='LEARNED'>LEARNED</option>
                        </Form.Control>
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
export default UpdatePostModal