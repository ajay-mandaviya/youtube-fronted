import "./App.css";
import React from "react";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SerchVideos from "./SerchVideos";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
        <Route  path="/search">
            <div className="app_page">
            <Sidebar />
            <SerchVideos/>
            </div>
          </Route>
           <Route exact path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route> 
          
        </Switch>
      </Router>
    </div>
  );
}
export default App;
