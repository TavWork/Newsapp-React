import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=15;
  apiKey="8db134a542f04ac1a502ffa87c23e49e"

  state = {
    progess: 5
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
        <div>
        <Router>
        <Navbar/>
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
          
          <Routes>
            <Route exact path="/" element = {<News setProgress={this.setProgress} key="home" pageSize={this.pageSize} county="us" category="general" apiKey={this.apiKey}/>}/>
            <Route exact path="/entertainment" element = {<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} county="us" category="entertainment" apiKey={this.apiKey}/>}/>
            <Route exact path="/business" element = {<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} county="us" category="business" apiKey={this.apiKey}/>} />
            <Route exact path="/general" element = {<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} county="us" category="general" apiKey={this.apiKey}/>} />
            <Route exact path="/health" element = {<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} county="us" category="health" apiKey={this.apiKey}/>}/>
            <Route exact path="/science" element = {<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} county="us" category="science" apiKey={this.apiKey}/>} />
            <Route exact path="/sports" element = {<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} county="us" category="sports" apiKey={this.apiKey}/>} />
            <Route exact path="/technology" element = {<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} county="us" category="technology" apiKey={this.apiKey}/>}/>
          </Routes>
        </Router>
        </div>
     
    )
  }
}

// render() {
//   return (
//     <div>
//       <Navbar/>
//       <News setProgress={this.setProgress} pageSize={this.pageSize} county="us" category="sports" apiKey={this.apiKey}/>
//     </div>
//   )
// }