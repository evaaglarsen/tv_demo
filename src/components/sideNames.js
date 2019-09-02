import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './components.css';
export default class SideNames extends Component {

    //functions defined here
    selectHandler = () => {
        console.log('selectHandler was clicked')
    }

    deleteHandler = () => {
        console.log('deleteHandler was clicked')
    }

    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return (
                <button className="delete"
                    onClick={this.props.deleteHandler}>
                    -
                </button>
            )
        }
    }

    render() {
        return (
            <div className="side-nav">
                <button onClick={this.props.selectHandler}>
                    {this.props.name}
                </button>
                {this.renderDelete()}
            </div>
        )
    }
}

SideNames.propTypes = {
    name: PropTypes.string,
    allowDelete: PropTypes.bool,
    deleteHandler: PropTypes.func,
    selectHandler: PropTypes.func
}