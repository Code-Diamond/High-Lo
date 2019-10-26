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
            
            <div class="userAmount">
                You have: 0.00000001 coins.
            </div>

            <div class="freeCoins">
                <Button variant="secondary">Get Free Coins</Button>
            </div>

            <div class="multiplier">
                <ButtonGroup aria-label="multiplierOptions">
                    <Button variant="secondary">1.5</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">4</Button>
                    <Button variant="secondary">8</Button>
                </ButtonGroup> 
                <Form>
                    <Form.Group controlId="multiplierForm">
                        <Form.Control as="input" rows="1" res/>
                    </Form.Group>
                </Form>
                <p class="multiplierLabel">
                    multiplier
                </p> 
            </div>

            <div class="betChance">
                <ButtonGroup aria-label="chanceOptions">
                    <Button variant="secondary">+5%</Button>
                    <Button variant="secondary">-5%</Button>
                    <Button variant="secondary">+10%</Button>
                    <Button variant="secondary">-10%</Button>
                </ButtonGroup> 
                <Form>
                    <Form.Group controlId="chanceForm">
                        <Form.Control as="input" rows="1" res/>
                    </Form.Group>
                </Form>
                <p class="chanceLabel">
                    Chance
                </p>
            </div>

            <div class="betQuickButtons">
                <ButtonGroup aria-label="betQuickButtons">
                    <Button variant="secondary">min</Button>
                    <Button variant="secondary">.001</Button>
                    <Button variant="secondary">/2</Button>
                    <Button variant="secondary">x2</Button>
                    <Button variant="secondary">max</Button>
                </ButtonGroup>            
            </div>

            <div class="betAmount">
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="input" rows="1" res/>
                    </Form.Group>
                </Form>
                <p class="currentBetAmountLabel">
                    Current Bet Amount
                </p>

            </div>

            <div class="loHighButtons">
                <Button variant="primary" size="lg" block>
                    Bet Lo
                </Button>
                <Button variant="danger" size="lg" block>
                    Bet High
                </Button>

            </div>

        </div>

    );

}

export default App;
