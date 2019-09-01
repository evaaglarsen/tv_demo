import React, { Component } from 'react';
import './components.css';
export default class SideNav extends Component {

    //functions defined here
    selectHandler = () => {
        console.log('selectHandler was clicked')
    }

    deleteHandler = () => {
        console.log('deleteHandler was clicked')
    }

    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return <button className="delete">-</button>
        }
    }

    //rendering this component
    render() {
        return (
            <div className="side-nav">
                <button onClick={this.props.selectHandler}>
                    {this.props.title}
                </button>
                {this.renderDelete()}
            </div>
        )
    }
}
