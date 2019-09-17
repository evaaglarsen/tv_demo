import React, { Component } from "react"
import SideNames from '../components/sideNames'
import PropTypes from 'prop-types';
import './pages.css';
class PreviewPage extends Component {
    state = {
        selectedShow: {
            name: "default name",
            rating: "default rating",
            imageUrl: "default url"
        }
    }

    showSelected = (event) => {
        console.log(event)
        this.setState({
            selectedShow: {
                name: event.name,
                rating: event.rating,
                imageUrl: event.url
            }
        })
    }

    renderShows = () => {
        return this.props.shows.filter((show) => {
            return parseInt(show.rating) >= 4
        }).map((show, i) => {
            return <SideNames key={i} name={show.name}
                allowDelete={true}
                selectHandler={() => this.showSelected(show)}
                deleteHandler={this.showDeleted}
            />
        })
    }

    calcAvgRating = () => {
        const tvShows = this.props.shows;
        if (!tvShows.length) {
            return 0;
        }
        // else if (tvShows.length == 1) {
        //     return show.rating;
        // }
        else {
            return 100;
            //trying to figure out how to access just the rating part of the array, so that I can 
            //add those together using reduce and ultimately get the average. Trying to do this with 
            //a combination of the map function and reduce, but so far, I haven't been having any luck.
            //My code has been so convoluted by this point that I just deleted it.
            
    
    render() {
        return (
            <div className="content-wrapper">
                <div>
                    <div id="sideNames">
                        <h2>Shows</h2>
                        {this.calcAvgRating()}
                        {this.renderShows()}
                    </div>
                </div>
                <div>
                    <h2>Shows</h2>
                    <h3>{this.state.selectedShow.name}</h3>
                    <h3>{this.state.selectedShow.rating}</h3>
                    <h3>{this.state.selectedShow.imageUrl}</h3>
                </div>
            </div>
        )
    }
}
PreviewPage.propTypes = {
    show: PropTypes.array
}

export default PreviewPage