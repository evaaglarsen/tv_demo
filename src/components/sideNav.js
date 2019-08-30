import React, { Component } from 'react';
import './components.css';
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
                <button> 
                    onClick={this.props.selectHandler}</button>
                {this.renderDelete()}
            </div>
        )
    }
}


