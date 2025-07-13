import React, { Component } from 'react'
import SingUp from './SingUp'
import Home from './Home'

export default class LoginShow extends Component {

    constructor(props){

        super(props)

        this.state={
            isLogin:false,
        }
    }


    handleLogin=()=>{

        this.setState({
            isLogin:true,
        })
    }
  render() {
    return (
      <div>
        {this.state.isLogin ? <Home /> : <SingUp /> }
        <button onClick={this.handleLogin}> Login</button>
      </div>
    )
  }
}
