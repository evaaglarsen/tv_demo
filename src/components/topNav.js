import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class TopNav extends Component {

    //rendering this component
    render() {
        return (
            <nav className="topNav">
                <div><Link to='/'>Manage Page</Link></div>
                <nav className="topNav"></nav>
                <div><Link to='/preview-page'>Preview Page</Link></div>
            </nav>
        )
    }
}