import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class sideNav extends Component {
    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return this.button;
        }
    }
    
    render() {
        return (
            <div>
                <button>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}
