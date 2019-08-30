import React, { Component } from "react"
import SideNav from '../components/sideNav'
import './pages.css';
export default class ManagePage extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div id="sideNav">
                    <SideNav
                        name="Chuck"                    
                        allowDelete={true}                      //all these are properties of this button
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                    />
                    <SideNav name="Queen of the South" allowDelete={true} />
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