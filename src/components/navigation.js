import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <nav className="topNav">
                <ul>
                    <li><Link to='/'>Manage Page</Link></li>
                    <li><Link to='/preview-page'>Preview Page</Link></li>
                </ul>

            </nav>
        )
    }
}