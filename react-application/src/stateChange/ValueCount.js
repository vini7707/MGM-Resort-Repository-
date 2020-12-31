import React from 'react';

class ValueCount extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.incre = this.incre.bind(this)
        this.decre = this.decre.bind(this)
    }
    incre(){
        this.setState({
            count: this.state.count+1
        })
    }
    decre(){
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <h1> {this.state.count} </h1>
                <button onClick= {this.incre}>Increment</button>
                <button onClick= {this.decre}>Decrement</button>

            </div>
        )
    }
}
export default ValueCount;