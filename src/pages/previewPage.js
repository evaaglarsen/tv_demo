import React, { Component } from "react"
import SideNames from '../components/sideNames'
import './pages.css';
export default class PreviewPage extends Component {

    render(){
        return(
            <div>
                <SideNames name="Chuck" rating={true}/>
            </div>
        )
    }
}

