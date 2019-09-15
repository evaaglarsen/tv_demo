import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';
export default class SideNames extends Component {

    deleteHandler = () => {
        console.log('deleteHandler was clicked')
        this.setState({
            InputName: "",
            InputRating: "",
            InputURL: ""
        })
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
                <p>{this.props.show}</p>
                <button onClick={() =>
                    this.props.selectHandler('message from child')}
                    id={this.props.id}>
                    {this.props.name}
                </button>
                {this.renderDelete()}
            </div>
        )
    }
}

SideNames.propTypes = {
    name: PropTypes.string,
    renderDelete: PropTypes.bool,
    deleteHandler: PropTypes.func,
    selectHandler: PropTypes.func
}