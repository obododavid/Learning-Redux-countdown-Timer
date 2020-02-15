import React, { Component } from "react";
import "./App.css";
import {setSession} from './actions/action'
import {countUp} from './actions/action'
import {countDown} from './actions/action'
import {connect} from 'react-redux'

class App extends Component {

   dispatchBtnAction = (e) => {
    const direction = e.target.dataset.type
    if(direction === "INCREASE_COUNTER"){
      this.props.countUp(direction)
    }else{
      this.props.countDown(direction)
    }
  }
  
   setActiveSession = (e) => {
        const activeSession = e.target.value
        this.props.setSession(activeSession)
      };
  render() {
   
    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">BOOK NAME</h4>
          <h1 className="App__header">Understanding Redux - 1</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={this.setActiveSession}
                value={this.props.activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {this.props.days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {this.props.hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {this.props.minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {this.props.seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button className="App__text--white" data-type="INCREASE_COUNTER" onClick={this.dispatchBtnAction}>
              INCREASE
            </button>
            <button className="App__text--white" data-type="DECREASE_COUNTER" onClick={this.dispatchBtnAction}>
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    days: state.days,
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    activeSession: state.activeSession
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    countUp: (direction) => dispatch(countUp(direction)),
    countDown: (direction) => dispatch (countDown(direction)),
    setSession: (as) => dispatch(setSession(as))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
