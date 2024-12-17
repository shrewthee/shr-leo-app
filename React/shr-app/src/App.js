
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header'


import Quicklinks from './components/Quicklinks';

function App() {


  return (
    <div className="App">

      <Container>
        <Row className='mt-4'>
          <Col md={3}>
            <Row></Row>
            <Col>
              <Header ></Header>
            </Col>
            <Row>
              <Col>
                <Quicklinks ></Quicklinks>
              </Col>
            </Row>


          </Col>
          <Col md={6}>
            <Quicklinks></Quicklinks>
          </Col>
          <Col md={3}>
            <Quicklinks></Quicklinks>
          </Col>
        </Row>



      </Container>

    </div>



  );
}

export default App;
