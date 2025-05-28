import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {

  const [progress, setProgress] = useState(5);
  const pageSize=15;
  const apiKeys = process.env.REACT_APP_NEWAPI_KEY 
  const apiKey="8db134a542f04ac1a502ffa87c23e49e"

console.log(apiKeys)
    
    return (
        <div>
        <Router>
        <Navbar/>
        <LoadingBar color="#f11946" progress={setProgress} height={3} />
          <Routes>
            <Route exact path="/" element = {<News setProgress={setProgress} key="home" pageSize={pageSize} country="us" category="general" apiKey={apiKey}/>}/>
            <Route exact path="/entertainment" element = {<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" apiKey={apiKey}/>}/>
            <Route exact path="/business" element = {<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" apiKey={apiKey}/>} />
            <Route exact path="/general" element = {<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" apiKey={apiKey}/>} />
            <Route exact path="/health" element = {<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" apiKey={apiKey}/>}/>
            <Route exact path="/science" element = {<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" apiKey={apiKey}/>} />
            <Route exact path="/sports" element = {<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" apiKey={apiKey}/>} />
            <Route exact path="/technology" element = {<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" apiKey={apiKey}/>}/>
          </Routes>
        </Router>
        </div>
     
    )
  
}

export default App;


// render() {
//   return (
//     <div>
//       <Navbar/>
//       <News setProgress={setProgress} pageSize={pageSize} country="us" category="sports" apiKey={apiKey}/>
//     </div>
//   )
// }