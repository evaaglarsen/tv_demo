import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <nav className="topNav">
                <div><Link to='/'>Manage Page</Link></div>
                <div><Link to='/preview-page'>Preview Page</Link></div>


            </nav>
        )
    }
}