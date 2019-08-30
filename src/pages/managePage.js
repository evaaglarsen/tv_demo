import React, { Component } from "react"
import SideNav from '../components/sideNav'
import './pages.css';
export default class ManagePage extends Component {

   tvShowSelected = () => {
       console.log('tvShowSelected')
   }

   tvShowDeleted = () => {
       console.log('tvShowDeleted')
   }

    render() {
        return (
            <div className="content-wrapper">
                <div id="sideNav">
                    <SideNav
                        name="TV Show 1"                                         //all these are properties of this button
                        allowDelete={true}                      
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                        tvShowSelected={this.tvShowSelected}
                        tvShowDeleted={this.tvShowDeleted}
                    />
                    <SideNav 
                        name="TV Show 2" 
                        allowDelete={true} 
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                        tvShowSelected={this.tvShowSelected}
                        tvShowDeleted={this.tvShowDeleted}
                        />
                </div>
                <div>
                    <h1>New/Edit Show</h1>
                    Name: <input name="showName" type="text" />
                    <br /><br />
                    Rating: <input rating="showRating" type="text" />
                    <br /><br />
                    Image URL: <input rating="showImageURL" type="url" />
                    <br /><br />
                    <button type="button">Create/Update</button>
                </div>
            </div>
        )
    }
}