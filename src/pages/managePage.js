import React, { Component } from "react"
import SideNames from '../components/sideNames'
import './pages.css';
export default class ManagePage extends Component {
    state = {
        show: {
            Name: "Chuck as placeholder",
            Rating: "1",
            URL: "http://www.chuck.com"
        }
    }

    setName = (e) => {
        this.setState({
            show: {
                Name: e.target.value,
                Rating: this.state.show.name,
                URL: this.state.show.URL
            }
        })
    }

    setRating = (e) => {
        this.setState({
            show: {
                Name: this.state.show.name,
                Rating: e.target.value,
                URL: this.state.show.URL
            }
        })
    }

    setURL = (e) => {
        this.setState({
            show: {
                Name: this.state.show.name,
                Rating: this.state.show.name,
                URL: e.target.value
            }
        })
    }

    //functions defined here
    tvShowSelected = () => {
        console.log("the tvShowSelected function ran");
        this.setState({
            Name: this.state.show.Name,
            Rating: this.state.show.Rating,
            URL: this.state.show.URL
        })
    }

    tvShowDeleted = () => {
        console.log("the tvShowDeleted function ran")
        this.setState({
            showName: "",
            showRating: "",
            showURL: ""
        })
    }

    saveTVShow = () => {
        this.setState({
            Name: this.state.show.Name,
            Rating: this.state.show.Rating,
            URL: this.state.show.URL,
        })
    }

    renderSideNames = () => {
        return (
            <SideNames
                name={this.state.show.Name}
                allowDelete={true}
                selectHandler={this.tvShowSelected}
                deleteHandler={this.tvShowDeleted} />
        )
    }


    //rendering this page
    render() {
        console.log(this.state)
        return (
            <div className="content-wrapper">
                <div id="sideNames">
                    <div>
                        <h2>Shows</h2>
                        {this.renderSideNames()}
                        {this.renderSideNames()}
                    </div>

                </div>
                <div>
                    <h1>New/Edit Show</h1>
                    <form className="formInput">
                        <label className="fieldName">
                            Name:
                        <input type="text"
                                value={this.state.Name}
                                onChange={(e) => { this.setName(e) }}
                            />
                        </label>
                        <br />
                        <label className="fieldName">
                            Rating:
                        <input type="rating"
                                value={this.state.Rating}
                                onChange={(e) => { this.setRating(e) }}
                            />
                        </label>
                        <br />
                        <label className="fieldName">
                            Image URL:
                        <input type="url"
                                value={this.state.URL}
                                onChange={(e) => { this.setURL(e) }}

                            />
                        </label>
                        <br />
                        <button
                            className="create" type="button"
                            onClick={() => this.saveTVShow()}>Create/Update</button>
                    </form>
                </div>
            </div>
        )
    }
}