import React, { Component } from 'react';
import './App.css';
import ManagePage from './pages/managePage/managePage'
import PreviewPage from './pages/previewPage/previewPage'
import Navigation from './components/navigation'
import { Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={ManagePage} />
        <Route exact path="/preview-page" component={PreviewPage} />
      </div>
    );
  }
}

export default App;
