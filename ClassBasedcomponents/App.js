import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Newscomponent from './Components/Newscomponent';
import Newsitem from './Components/Newsitem';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pagesize = 9;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div className='Container'>
        <Router>
          <Newscomponent/>
          <Navbar />
          <LoadingBar
            color='red'
            progress={this.state.progress}
          />
          <Routes>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" category="general" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" category="business" pageSize={this.pagesize} country="in" apiKey={this.apiKey}/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" category="general" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category="health" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category="science" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" category="sports" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category="technology" pageSize={this.pagesize} country="in" apiKey={this.apiKey} />}></Route>
          </Routes>


        </Router>
      </div>
    )
  }
}