import React from "react";
import { incAction, decAction,incIfOddAction,asnyc,timeAdd, stopTime  } from "./action";
import { connect } from "react-redux";


class AssignOne extends React.Component{
  render(){
    return (
      <div>
        <h1>Counter Component</h1>
        {this.props.Shows}
        <button onClick={this.props.incrementHandler}>+</button>
        <button onClick={this.props.decrementHandler}>-</button>
        <button onClick={this.props.incrementIfOddHandler}>Increment-If-odd</button>
        <button onClick={this.props.asyncHandler}>Async-Inc</button>
        <button onClick={this.props.timeAddHandler}>time-Add</button>
        <button onClick={this.props.stopTiemHandler}>Stop</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { counter } = state
  return {Shows: counter}
}

const mapDispathToProps = (dispatch) => ({
  stopTiemHandler: ()=> dispatch(stopTime()),
  timeAddHandler: ()=> dispatch(timeAdd()),
  asyncHandler: () => dispatch(asnyc()),
  incrementIfOddHandler: () => dispatch(incIfOddAction()),
  incrementHandler: () => dispatch(incAction()),
  decrementHandler: () => dispatch(decAction())
})


const ConnectedApp = connect (mapStateToProps, mapDispathToProps)(AssignOne);


export { ConnectedApp as default, AssignOne }

