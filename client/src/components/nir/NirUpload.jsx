import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react';
import { apiUrl } from '../../contexts/constants';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'


const NirUpload = () => {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('False')



    const modalClick = () => setShow(false)

    const [newSong, setNewSong] = useState({
        name: '',
        singer: '',
        url: '',
        image: ''
    })
    const upSong = async (newSong) => {
        try {
            const upload = await axios.post(`${apiUrl}/song`, newSong)
            return upload
        } catch (error) {
            console.log(error)
        }
    }
    const { name, singer, url, image } = newSong
    const onChangeNewSongForm = event => setNewSong({ ...newSong, [event.target.name]: event.target.value })
    const onSubmit = async event => {
        event.preventDefault()
        const status = await upSong(newSong)
        setModalTitle(status.data.message)
        setShow(status.data.success)

    }





    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.1)), url(https://www.teahub.io/photos/full/96-960697_minimalism-airplane-over-mountains-gradient-wallpaper-minimalist-ipad.jpg) no-repeat center/cover'

        }} >
            <Modal show={show}>
                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Enjoy music !!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={modalClick}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

            <Form onSubmit={onSubmit} className='NirForm' style={{ padding: '55px', width: '700px' }}>
                <Form.Group className="mb-3" controlId="floatingInput">
                    <Form.Label>Song name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' value={name} onChange={onChangeNewSongForm} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Singer</Form.Label>
                    <Form.Control type="text" placeholder="Singer" name='singer' value={singer} onChange={onChangeNewSongForm} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="text" placeholder="Url" name='url' value={url} onChange={onChangeNewSongForm} />
                </Form.Group><Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Image" name='image' value={image} onChange={onChangeNewSongForm} />
                </Form.Group>
                <Button variant="outline-danger" type="submit">
                    Submit
                </Button>
            </Form>

        </div>

    )
};

export default NirUpload;
