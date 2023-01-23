import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
  import Home from './components/home';
import Colleges from './components/colleges';
  import CollegeDetails from './components/college-details';
import About from './components/about';
import Error from './components/error';
import Contact from './components/contact'; 
 import { BrowserRouter } from 'react-router-dom';
class Root extends Component {
    render() {
        return(
            <BrowserRouter basename="/">
                 <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/colleges" component={Colleges} />
                    <Route path="/college-details" component={CollegeDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/error" component={Error} />
                    <Route path="/contact" component={Contact} />
                 </Switch>
                </div>
             </BrowserRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('2_odev'));
