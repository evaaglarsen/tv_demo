import React, { Component } from "react";
import SideNames from '../components/sideNames';
import PropTypes from 'prop-types';
import './pages.css';

class ManagePage extends Component {
    state = {
        inputName: "",
        inputRating: "",
        inputURL: ""
    }

    showSelected = (stringFromChild) => {
        this.setState({
            inputShow: this.props.show
        });
    }

    showDeleted = () => {
        this.props.showDeleted();
    }

    saveShow = (show) => {
        this.props.saveShow(show);
        this.setState({
            inputName: "",
            inputRating: "",
            inputURL: "",
        })
    }

    renderShows = () => {
        return this.props.shows.map((show, i) => {
            return <SideNames key={i} name={show.name}
                allowDelete={true}
                selectHandler={this.showSelected}
                deleteHandler={this.showDeleted}
            />
        })
    }

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
                                value={this.state.inputName} onChange={(e) => {
                                    this.setState({
                                        inputName: e.target.value,
                                    })
                                }} placeholder="Show Name" />
                        </label>
                        <br />
                        <label className="fieldName">
                            Rating:
                        <input type="rating"
                                value={this.state.inputRating}
                                onChange={(e) => {
                                    this.setState({
                                        inputRating: e.target.value,
                                    })
                                }} placeholder="Show Rating" />
                        </label>
                        <br />
                        <label className="fieldName">
                            Image URL:
                        <input type="url"
                                value={this.state.inputURL}
                                onChange={(e) => {
                                    this.setState({
                                        inputURL: e.target.value,
                                    })
                                }} placeholder="Show URL" />
                        </label>
                        <br />
                        <button onClick={(e) => {
                            e.preventDefault()
                            this.saveShow({
                                name: this.state.inputName,
                                rating: this.state.inputRating,
                                url: this.state.inputURL
                            })
                        }}>Create/Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

ManagePage.propTypes = {
    show: PropTypes.array,
    showDeleted: PropTypes.func,
    saveShow: PropTypes.func
}

export default ManagePage