import React, { Component } from 'react';
import './App.css';
import ManagePage from './pages/managePage'
import PreviewPage from './pages/previewPage'
import TopNav from './components/topNav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { async } from 'q';
export default class App extends Component {
  state = {
    shows: []
  }

  componentDidMount = () => {
    this.renderTvShows()
  }
  renderTvShows = async () => {
    try {
      const apiCall = await fetch("http://localhost:3001/getAllTvShows")
      this.setState({
        shows:await apiCall.json()
      })
    } catch (err) {
      console.log(err)
    }
  }

  showDeleted = () => {
    this.setState({
      inputName: "",
      inputRating: "",
      inputURL: ""
    })
  }

  saveShow = async(showToSave) => {
    try{
      const postCall = await fetch("http://localhost:3001/tvDemo", {
        method:"post",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(showToSave)
      }) 
      await postCall
      this.renderTvShows()
    }catch(err){
      console.log(err)
    }
    // this.setState((prevState) => ({
    //   shows: [...prevState.shows, showToSave]
    // }))
  }

  renderManagePage = () => {
    return (
      <ManagePage
        shows={this.state.shows}
        showDeleted={this.showDeleted}
        saveShow={this.saveShow} />
    )
  }

  renderPreviewPage = () => {
    return (
      <PreviewPage
        show={this.state.show}
        shows={this.state.shows} />
    )
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Route exact path="/" component={this.renderManagePage} />
          <Route exact path="/preview-page" component={this.renderPreviewPage} />
        </div>
      </Router>
    );
  }
}