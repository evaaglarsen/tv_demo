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
        let id = event.currentTarget.id;
        this.setState({
            selectedShow: {
                name: this.props.shows[id].name,
                rating: this.props.shows[id].rating,
                imageUrl: this.props.show[id].imageUrl
            }
        })
    }

    renderShows = () => {
        return (
            <SideNames
                name={this.props.name}
                selectHandler={this.showSelected}
            />
        )
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