import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom'
export default class SideNav extends Component {
    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return <button>-</button>
        }
    }
    
    render() {
        return (
            <div className = "side-nav">
                <button>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}
