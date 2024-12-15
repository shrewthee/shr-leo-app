import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyButton from './components/MyButton';
import Service from './components/Service'

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [secondcount, setSecondcount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClick2() {
    setSecondcount(secondcount + 1);
  }

  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Service></Service>

          </Col>
          <Col>
            <MyButton count={count} onClick={handleClick} ></MyButton>
          </Col>
          <Col>
            <MyButton count={secondcount} onClick={handleClick2}></MyButton>

          </Col>

        </Row>
      </Container>

    </div>



  );
}

export default App;
