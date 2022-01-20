import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
    return (
        <Row style={{margin: '100px auto'}}>
            <Col>
                <Button variant='primary'
                    href='https://tungtt30.github.io/nir/'
                    size='lg'
                >
                    Visit github
                </Button>
            </Col>
        </Row>


    )
}


export default About