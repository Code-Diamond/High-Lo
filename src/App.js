import React from 'react';
import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './App.css';


function App() {
    return (
        <div class="App-header">
            
            <h1>Welcome to High-Lo Dice</h1>
            
            <p class="App">
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="input" rows="1" res/>
                    </Form.Group>
                </Form>
            </p>

            <p class="App">
                Current Bet Amount
            </p>
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
            <p class="App">
                <Button variant="betHigh" size="lg" block>
                    Bet Lo
                </Button>
                <Button variant="primary" size="lg" block>
                    Bet High
                </Button>

            </p>

        </div>

    );

}

export default App;
