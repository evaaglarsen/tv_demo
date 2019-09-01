import React, { Component } from 'react';
import './App.css';
import ManagePage from './pages/managePage'
import PreviewPage from './pages/previewPage'
import TopNav from './components/topNav'
import { Route } from 'react-router-dom'
class App extends Component {

  //rendering the app
  render() {
    return (
      <div className="App">
        <TopNav />
        <Route exact path="/" component={ManagePage} />
        <Route exact path="/preview-page" component={PreviewPage} />
      </div>
    );
  }
}

export default App;
