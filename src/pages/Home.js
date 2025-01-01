
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from './Layout';
import './../styles/Home.css'


function Home() {
    return (

        <Layout>
            <Container fluid>

                <Row>
                    <div >
                        <img src="https://shrewthee.github.io/shr-leo-app/assets/Leobanner.png" className='img-fluid  ' />

                    </div>

                    {/* <div className='header-text-container'>
                        <p className='display-1' >Leo the DOG aka GOD</p>
                    </div> */}
                </Row>
            </Container>

            <Container>
                <Row className='mt-5'>
                    <Col md={6}>
                        <p className='text-start mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                    <Col md={6}>
                        <img src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" className='img-fluid' />
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>

                        <img src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" className='img-fluid' />
                    </Col>
                    <Col md={6}>
                        <p className='text-start mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>
                        <p className='text-start mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                    <Col md={6}>
                        <img src="https://images.unsplash.com/photo-1467811884194-ae868cd3f090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Home;