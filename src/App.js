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
            
            <div class="betQuickButtons">
                <ButtonGroup aria-label="betQuickButtons">
                    <Button variant="secondary">min</Button>
                    <Button variant="secondary">.001</Button>
                    <Button variant="secondary">/2</Button>
                    <Button variant="secondary">x2</Button>
                    <Button variant="secondary">max</Button>
                </ButtonGroup>            
            </div>

            <div class="betAmt">
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="input" rows="1" res/>
                    </Form.Group>
                </Form>
                <p class="currentBetAmountText">
                    Current Bet Amount
                </p>

            </div>


            <p class="loHighButtons">
                <Button variant="primary" size="lg" block>
                    Bet Lo
                </Button>
                <Button variant="danger" size="lg" block>
                    Bet High
                </Button>

            </p>

        </div>

    );

}

export default App;
