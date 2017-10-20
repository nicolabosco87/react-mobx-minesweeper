import React, {Component} from 'react'

const cellStyle = {
    width: 20,
    height: 20,
    display: 'block'
}

@inject
class Cell extends Component {

    openCell = () => {
        console.log(this.props.cell.coords);
    }

    render() {
        return (
            <button style={cellStyle}
                    onClick={this.openCell}
                    disabled={this.props.cell.opened}>{ this.props.cell.opened ? this.props.cell.isMine : '' }</button>
        )
    }
}

export default Cell;