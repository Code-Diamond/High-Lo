import React from 'react';
import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './App.css';


function App() {


    function getFreeCoins (){
        alert('obtain free coins');
    }

    function multiplyTimesOnePointFive(){
        alert('multiplier times 1.5');
    }
    function multiplyTimesTwo(){
        alert('multiplier times two');
    }
    function multiplyTimesFour(){
        alert('multiplier times 4');
    }
    function multiplyTimesEight(){
        alert('multiplier times 8');
    }


    function chanceUpFivePercent(){
        alert('+5%');
    }
    function chanceDownFivePercent(){
        alert('-5%');
    }
    function chanceUpTenPercent(){
        alert('raise chance up 10%');
    }
    function chanceDownTenPercent(){
        alert('change chance down 10%');
    }    

    function currentBetMin (){
        alert('change bet to min');
    }
    function currentBetOneHundredth (){
        alert('change bet to .001');
    }
    function currentBetDivideTwo (){
        alert('change bet divide two');
    }
    function currentBetMultiplyTwo (){
        alert('change bet times two');
    }
    function currentBetMax (){
        alert('change bet to max');
    }
    function betLo () {
        alert('Bet Lo');
    }
    function betHigh () {
        alert('Bet High');
    }


    return (
        <div class="App-header">
            
            <h1>Welcome to High-Lo Dice</h1>
            
            <div class="userAmount">
                You have: 0.00000001 coins.
            </div>

            <div class="freeCoins">
                <Button variant="secondary" onClick={getFreeCoins}>Get Free Coins</Button>
            </div>

            <div class="multiplier">
                <ButtonGroup aria-label="multiplierOptions">
                    <Button variant="secondary" onClick={multiplyTimesOnePointFive}>1.5</Button>
                    <Button variant="secondary" onClick={multiplyTimesTwo}>2</Button>
                    <Button variant="secondary" onClick={multiplyTimesFour}>4</Button>
                    <Button variant="secondary" onClick={multiplyTimesEight}>8</Button>
                </ButtonGroup> 
                <Form>
                    <Form.Group controlId="multiplierForm">
                        <Form.Control as="input" rows="1" res/>
                    </Form.Group>
                </Form>
                <p class="multiplierLabel">
                    Multiplier
                </p> 
            </div>

            <div class="betChance">
                <ButtonGroup aria-label="chanceOptions">
                    <Button variant="secondary" onClick={chanceUpFivePercent}>+5%</Button>
                    <Button variant="secondary" onClick={chanceDownFivePercent}>-5%</Button>
                    <Button variant="secondary" onClick={chanceUpTenPercent}>+10%</Button>
                    <Button variant="secondary" onClick={chanceDownTenPercent}>-10%</Button>
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
                    <Button variant="secondary" onClick={currentBetMin}>min</Button>
                    <Button variant="secondary" onClick={currentBetOneHundredth}>.001</Button>
                    <Button variant="secondary" onClick={currentBetDivideTwo}>/2</Button>
                    <Button variant="secondary" onClick={currentBetMultiplyTwo}>x2</Button>
                    <Button variant="secondary" onClick={currentBetMax}>max</Button>
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
                <Button variant="primary" size="lg" onClick={betLo} block>
                    Bet Lo
                </Button>
                <Button variant="danger" size="lg" onClick={betHigh} block>
                    Bet High
                </Button>

            </div>

        </div>

    );

}

export default App;
