import React, {Component} from 'react'
import Board from './Board'
import { inject, observer } from 'mobx-react';
import * as CONSTANTS from '../include/constants'
import Navigation from "react-toolbox/lib/navigation";
import Button from "react-toolbox/lib/button";
import { Grid, Row, Col } from 'react-flexbox-grid';


const buttonsListStyle = {
    marginBottom: 30
}


@inject('mainStore') @observer
class Game extends Component {

    gameStatus() {

        if (this.props.mainStore.gameStatus == CONSTANTS.GAME_STATUS_STOP_WON) {
            return (
                <h2>You have won! :)</h2>
            )
        }

        if (this.props.mainStore.gameStatus == CONSTANTS.GAME_STATUS_STOP_LOSE) {
            return (
                <h2>You have Lose! :(</h2>
            )
        }
    }

    startGame = () => {
        this.props.mainStore.startGame();
    }


    gameButtons() {

        let buttons = [];

        switch (this.props.mainStore.gameStatus) {
            case CONSTANTS.GAME_STATUS_STOP:
                buttons.push(
                    (<Button raised label="New Game" onClick={this.startGame} />)
                );
                break;
            case CONSTANTS.GAME_STATUS_STOP_LOSE:
            case CONSTANTS.GAME_STATUS_STOP_WON:
                buttons.push(
                    (<Button raised label="Restart Game" onClick={this.startGame} />)
                );
            break;

            default:
                break;
        }

        return (buttons.length > 0) ? (<Navigation type='horizontal'>{buttons}</Navigation>) : null;

    }



    gameBoard() {
        return (this.props.mainStore.gameStatus == CONSTANTS.GAME_STATUS_STOP) ? null : (
            <div>
                <Row center="xs" >
                    <Col xs={6} >
                        <h3>Opened mines: {this.props.mainStore.openedMines}</h3>
                    </Col>
                    <Col xs={6} >
                        <h3>Total mines: {this.props.mainStore.getMaxMines() }</h3>
                    </Col>
                </Row>

            <Board/>
        </div>);
    }

    render = () =>
        <div className="game">


            <Grid fluid>
                <Row center="xs" >
                    <Col  xs={12} md={6} >

                        {this.gameStatus()}

                        <div style={buttonsListStyle}>
                            {this.gameButtons()}
                        </div>

                        {this.gameBoard()}
                    </Col>
                </Row>
            </Grid>


        </div>


}

export default Game;