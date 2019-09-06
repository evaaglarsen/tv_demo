import React, { Component } from "react"
import SideNames from '../components/sideNames'
import './pages.css';
export default class ManagePage extends Component {
    state = {
        show: {
            inputName: "Enter name of show",
            inputRating: "Enter Rating",
            inputURL: "Enter URL",
            savedName: "",
            savedRating: "",
            savedURL: ""
        }
    }

    setName = (e) => {
        this.setState({
            show: {
                inputName: e.target.value,
                inputRating: this.state.show.inputRating,
                inputURL: this.state.show.inputURL
            }
        })
    }

    setRating = (e) => {
        this.setState({
            show: {
                inputName: this.state.show.inputName,
                inputRating: e.target.value,
                inputURL: this.state.show.inputURL
            }
        })
    }

    setURL = (e) => {
        this.setState({
            show: {
                inputName: this.state.show.inputName,
                inputRating: this.state.show.inputRating,
                inputURL: e.target.value
            }
        })
    }

    //functions defined here
    ShowSelected = () => {
        console.log("the ShowSelected function ran")
        this.setState({
            inputName: this.state.show.inputName,
            inputRating: this.state.show.inputRating,
            inputURL: this.state.show.inputURL
        })
    }

    ShowDeleted = () => {
        console.log("the ShowDeleted function ran")
        this.setState({
            inputName: "",
            inputRating: "",
            inputURL: ""
        })
    }

    saveShow = () => {
        this.setState({
            savedName: this.state.show.inputName,
            savedRating: this.state.show.inputRating,
            savedURL: this.state.show.inputURL,
            inputName: "",
            inputRating: "",
            inputURL: ""
        })
    }

    renderShows = () => {
        return (
            <SideNames
                name={this.state.savedName}
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
                        {this.renderShows()}
                    </div>

                </div>
                <div>
                    <h1>New/Edit Show</h1>
                    <form className="formInput">
                        <label className="fieldName">
                            Name:
                        <input type="text"
                                value={this.state.show.inputName}
                                onChange={(e) => { this.setName(e) }}
                            />
                        </label>
                        <br />
                        <label className="fieldName">
                            Rating:
                        <input type="rating"
                                value={this.state.show.inputRating}
                                onChange={(e) => { this.setRating(e) }}
                            />
                        </label>
                        <br />
                        <label className="fieldName">
                            Image URL:
                        <input type="url"
                                value={this.state.show.inputURL}
                                onChange={(e) => { this.setURL(e) }}
                            />
                        </label>
                        <br />
                        <button
                            className="create" type="button"
                            onClick={() => this.saveShow()}>Create/Update</button>
                    </form>
                </div>
            </div>
        )
    }
}