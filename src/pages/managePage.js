import React, { Component } from "react"
import SideNav from '../components/sideNav'
import './pages.css';
export default class ManagePage extends Component {

    //functions defined here
    tvShowSelected = () => {
        console.log('tvShowSelected')
    }

    tvShowDeleted = () => {
        console.log('tvShowDeleted')
    }

    saveTVShow = () => {
        console.log('log the name of the show')
    }

    //rendering this page
    render() {
        return (
            <div className="content-wrapper">
                <div id="sideNav">
                    <SideNav
                        title="Chuck"                                       //all these are properties of this button
                        allowDelete={true}
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                        tvShowSelected={this.tvShowSelected}
                        tvShowDeleted={this.tvShowDeleted}
                        saveTVShow={this.saveTVShow}
                    />
                    <SideNav
                        title="Queen of the South"
                        allowDelete={true}
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                        tvShowSelected={this.tvShowSelected}
                        tvShowDeleted={this.tvShowDeleted}
                        saveTVShow={this.saveTVShow}
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
                    <button className="create" type="button">Create/Update</button>
                </div>
            </div>
        )
    }
}