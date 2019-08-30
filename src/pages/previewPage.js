import React, { Component } from "react"
import SideNav from '../components/sideNav'
import './pages.css';
export default class PreviewPage extends Component {
    render() {
        return (
            <div className="Preview-Page">   
                    <nav id="sideNav">
                        <SideNav name="Chuck" allowDelete={true} />
                        <SideNav name="Queen of the South" allowDelete={true} />
                    </nav>
                               
                    <h1>
                        <div>Queen of the South</div>
                        <div>Rating: 8</div>
                    </h1>

                    <img src='../images/QueenoftheSouth.jpg' alt="Queen of the South" />
                
            </div>
        )
    }
}