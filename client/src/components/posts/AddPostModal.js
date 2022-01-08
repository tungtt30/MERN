import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'




const AddPostModal = () => {
    //context
    const { showAddPostModal, setShowAddPostModal, addPost, getPosts } = useContext(PostContext)

    // State
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        url: '',
        status: 'TO LEARN',
    })
    const { title, description, url } = newPost
    const onChangeNewPostForm = event => setNewPost({ ...newPost, [event.target.name]: event.target.value })

    const closeDialog = () => {
        resetAddPostData()
    }
    const onSubmit = async event => {
        event.preventDefault()
        await addPost(newPost)
        resetAddPostData()
        getPosts()
    }
    const resetAddPostData = () => {
        setNewPost({ title: '', description: '', url: '', status: 'TO LEARN' })
        setShowAddPostModal(false)
    }

    return (

        <Modal show={showAddPostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Whatsupp</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group className='my-2'>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeNewPostForm} />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control as='textarea' rows={3} placeholder='Description' name='description' value={description} onChange={onChangeNewPostForm} />
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control type='text' placeholder='URL' name='url' value={url} onChange={onChangeNewPostForm} />
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