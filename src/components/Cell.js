import React, {Component} from 'react'
import { inject, observer } from 'mobx-react';
import * as CONSTANTS from '../include/constants'

const cellStyle = {
    width: 20,
    height: 20,
    display: 'block'
}

@inject('mainStore') @observer
class Cell extends Component {

    openCell = () => {
        this.props.mainStore.openCell(this.props.cell.row, this.props.cell.col)
    }

    render() {
        cellStyle.background = (this.props.cell.opened && this.props.cell.isMine) ? '#aa0000' : '#ccc';

        return (
            <button style={cellStyle}
                    onClick={this.openCell}
                    disabled={this.props.cell.opened || this.props.mainStore.gameStatus != CONSTANTS.GAME_STATUS_ONGOING}>
                { this.props.cell.opened ? this.props.mainStore.getCellAdjacentMinesNumber(this.props.cell.row, this.props.cell.col) : '' }
                </button>
        )
    }
}

export default Cell;