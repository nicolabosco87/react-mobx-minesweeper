import React, {Component} from 'react'
import Cell from './Cell'
import { inject, observer } from 'mobx-react';
import * as CONSTANTS from "../include/constants";

const boardStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

}

// @inject('mainStore') @observer
// const Board = inject('mainStore')(observer(({ mainStore }) => {
@inject('mainStore') @observer class Board extends Component {

    render() {
        let cols = [];

        for (let i = 0; i < CONSTANTS.GRID_ROWS; i++) {
            for (let k = 0; k < CONSTANTS.GRID_COLS; k++) {
                cols.push(<Cell cell={this.props.mainStore.grid[i][k]}/>);
            }
        }

        boardStyle.width = 20 * CONSTANTS.GRID_COLS;

        return (
            <div className="board" style={boardStyle} >
                { cols }
            </div>
        );
    }
};

export default Board;