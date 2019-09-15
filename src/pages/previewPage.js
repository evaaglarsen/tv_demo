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
                imageUrl: event.imageUrl
            }
        })
    }

    renderShows = () => {
        return this.props.shows.map((show, i) => {
            return <SideNames key={i} name={show.name}
                allowDelete={true}
                selectHandler={() => this.showSelected(show)}
                deleteHandler={this.showDeleted}
            />
        })
    }

    render() {
        return (
            <div id="preview-page">
                <h2>Shows</h2>
                <h3>{this.state.selectedShow.name}</h3>
                <h3>{this.state.selectedShow.rating}</h3>
                <h3>{this.state.selectedShow.imageUrl}</h3>
                {this.renderShows()}
            </div>
        )
    }
}
PreviewPage.propTypes = {
    show: PropTypes.array
}

export default PreviewPage