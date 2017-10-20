import React, {Component} from 'react'
import Board from './Board'
import { inject, observer } from 'mobx-react';
import * as CONSTANTS from '../include/constants'

@inject('mainStore') @observer
class Game extends Component {

    gameStatus() {

        if (this.props.mainStore.gameStatus == CONSTANTS.GAME_STATUS_STOP_WON) {
            return (
                <h2>You have won!</h2>
            )
        }

        if (this.props.mainStore.gameStatus == CONSTANTS.GAME_STATUS_STOP_LOSE) {
            return (
                <h2>You have Lose! :(</h2>
            )
        }
    }

    render = () =>
        <div className="game">
            {this.gameStatus()}
            <Board />
        </div>


}

export default Game;