import React, { Component } from "react"
import SideNav from '../components/sideNav'
import './pages.css';
export default class PreviewPage extends Component {

    //rendering this page
    render() {
        return (
            <div className="Preview-Page">
                <div id="sideNav">
                    <SideNav
                        title="Game of Thrones"                                       //all these are properties of this button
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                        tvShowSelected={this.tvShowSelected}
                        tvShowDeleted={this.tvShowDeleted}
                        saveTVShow={this.saveTVShow}
                    />
                    <SideNav
                        title="Queen of the South"
                        selectHandler={this.selectHandler}
                        deleteHandler={this.deleteHandler}
                        tvShowSelected={this.tvShowSelected}
                        tvShowDeleted={this.tvShowDeleted}
                        saveTVShow={this.saveTVShow}
                    />
                </div>

                <h1>
                    <div>Queen of the South</div>
                    <div>Rating: 8</div>
                </h1>

                <img src='../images/QueenoftheSouth.jpg' alt="Queen of the South" />

            </div>
        )
    }
}
