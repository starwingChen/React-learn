import React from "react";

export default class App extends React.Component{
    state = {
        num:1
    }
    render(){
        
        return (
            <div>
                <h1>test</h1>
                <button onClick={this.test}>{this.state.num}</button>
            </div>

        )
    }
    test = ()=>{
        this.setState({num:this.state.num+1})
        
    }
}