import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { Animated } from "react-animated-css";
import { testAction } from './store/actions/testAction';
import PreLoader from './components/preloader/oldmoviePre';
import PreLoader2 from './components/preloader/winOpenpre'
import LandingPage from './pages/landing/landing';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preloader: true
    }
  }
  componentDidMount() {
    this.props.testAction("HEllo")
    setTimeout(() => {
      this.setState({
        preloader:false
      })
    },3000)
  }
  render() {
    // if (this.state.preloader) {
    //   return (
    //     <PreLoader2 />
    //   )
    // }
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.preloader?<PreLoader2 />:
           <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={1500}>
          <div className="landingDiv">
            <LandingPage />
          </div>
          </Animated>
          }
           {/* <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={1500}>
          <div className="landingDiv">
            <LandingPage />
          </div>
          </Animated> */}
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    test: state.test.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testAction: project => {
      dispatch(testAction(project))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
