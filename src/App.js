import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  apiKey="8db134a542f04ac1a502ffa87c23e49e"
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          
          <Routes>
            <Route exact path="/" element = {<News key="home" pageSize={this.pageSize} county="us" category="general" apiKey={this.apiKey}/>}/>
            <Route exact path="/entertainment" element = {<News key="entertainment" pageSize={this.pageSize} county="us" category="entertainment" apiKey={this.apiKey}/>}/>
            <Route exact path="/business" element = {<News key="business" pageSize={this.pageSize} county="us" category="business" apiKey={this.apiKey}/>} />
            <Route exact path="/general" element = {<News key="general" pageSize={this.pageSize} county="us" category="general" apiKey={this.apiKey}/>} />
            <Route exact path="/health" element = {<News key="health" pageSize={this.pageSize} county="us" category="health" apiKey={this.apiKey}/>}/>
            <Route exact path="/science" element = {<News key="science" pageSize={this.pageSize} county="us" category="science" apiKey={this.apiKey}/>} />
            <Route exact path="/sports" element = {<News key="sports" pageSize={this.pageSize} county="us" category="sports" apiKey={this.apiKey}/>} />
            <Route exact path="/technology" element = {<News key="technology" pageSize={this.pageSize} county="us" category="technology" apiKey={this.apiKey}/>}/>
        </Routes>

        </div>
      </Router>
    )
  }
}

// render() {
//   return (
//     <div>
//       <Navbar/>
//       <News pageSize={this.pageSize} county="us" category="sports" apiKey={this.apiKey}/>
//     </div>
//   )
// }