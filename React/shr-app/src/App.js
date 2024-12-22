
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dog from './components/Dog';
import Quicklinks from './components/Quicklinks';
import Spotlight from './components/Spotlight';
import ContactUs from './components/ContactUs';

function App() {


  return (
    <div className="App">

      <Container>
        <Row className='mt-4'>
          <Col md={3}>
            <Quicklinks ></Quicklinks>
          </Col>
          <Col md={6}>
            <Row>
            <Dog></Dog>
            </Row>
            <Row className='mt-4'>
            <Spotlight></Spotlight>
            </Row>
          </Col>
          <Col md={3}>
            <Spotlight></Spotlight>
            <ContactUs></ContactUs>
          </Col>
        </Row>



      </Container>

    </div>



  );
}

export default App;
