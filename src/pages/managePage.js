import React, { Component } from "react"
import SideNames from '../components/sideNames'
import './pages.css';
export default class ManagePage extends Component {

    state = {
        showName: "",
        showRating: "",
        showURL: "",
        inputName: "",
        inputRating: "",
        inputURL: ""
    }

    //functions defined here
    tvShowSelected = () => {
        console.log("the tvShowSelected function ran");
        this.setState({
            inputName: this.state.showName,
            inputRating: this.state.showRating,
            inputURL: this.state.showURL
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
            showName: this.state.inputName,
            showRating: this.state.inputRating,
            showURL: this.state.inputURL,
            inputName: "",
            inputRating: "",
            inputURL: ""
        })
    }

    renderSideNames = () => {
        return (
            <SideNames
                name={this.state.showName}
                allowDelete={true}
                selectHandler={this.tvShowSelected}
                deleteHandler={this.tvShowDeleted} />
        )
    }

//Add an onClick event handler for both buttons each calling a function passed via props named 'selectHandler' and 'deleteHandler' 
//Example: <button onClick={this.props.selectHandler}> 
//NOTE: Do NOT invoke the functions 
//Open ManagePage 
//Add 2 functions named 'tvShowSelected' and 'tvShowDeleted' 
//Both functions should console log that function's name 
//For all TVShow components on ManagePage pass the new functions to their matching props 
//Example: <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} /> 
//Now when you click the TVShow buttons logs should appear in the console 

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
                                value={this.state.inputName}
                                onChange={(e) => {
                                    this.setState({
                                        inputName: e.target.value
                                    })
                                }}
                            />
                        </label>
                        <br />
                        <label className="fieldName">
                            Rating:
                        <input type="rating"
                                value={this.state.inputRating}
                                onChange={(e) => {
                                    this.setState({
                                        inputRating: e.target.value
                                    })
                                }}
                            />
                        </label>
                        <br />
                        <label className="fieldName">
                            Image URL:
                        <input type="url"
                                value={this.state.inputURL}
                                onChange={(e) => {
                                    this.setState({
                                        inputURL: e.target.value
                                    })
                                }}
                            />
                        </label>
                        <br />
                        <button className="create" type="button">Create/Update</button>
                    </form>
                </div>
            </div>

        )
    }
}