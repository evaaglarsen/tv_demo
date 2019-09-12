import React, { Component } from 'react';
import './App.css';
import ManagePage from './pages/managePage'
import PreviewPage from './pages/previewPage'
import TopNav from './components/topNav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
export default class App extends Component {
  state = {
    shows: []
  }

  showDeleted = () => {
    this.setState({
      inputName: "",
      inputRating: "",
      inputURL: ""
    })
  }

  saveShow = (showToSave) => {
    this.setState((prevState) => ({
      shows: [...prevState.shows, showToSave]
    }))
  }

  renderManagePage = () => {
    return (
      <ManagePage
        shows={this.state.shows}
        showDeleted={this.showDeleted}
        saveShow={this.saveShow}/>
    )
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Route exact path="/" component={this.renderManagePage} />
          <Route exact path="/preview-page" component={PreviewPage} />
        </div>
      </Router>
    );
  }
}