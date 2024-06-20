import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Newscomponent from './Components/Newscomponent';
import Newsitem from './Components/Newsitem';
import News from './Components/News';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pagesize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  
  return (
    <div className='Container'>
      <Router>
        <Newscomponent />
        <Navbar />
        <LoadingBar
          color='red'
          progress={progress}
        />
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" category="general" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" category="general" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" pageSize={pagesize} country="in" apiKey={apiKey} />}></Route>
        </Routes>


      </Router>
    </div>
  )

}
export default App;