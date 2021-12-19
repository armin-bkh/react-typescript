import { Component } from "react";

interface CounterProps {
    message: string,
}
 
interface CounterState {
    count: number,
}
 
class ClassCounter extends Component<CounterProps, CounterState> {
    state = { count: 0 }

    incrementCountHandler = () => {
        this.setState((state)=> ({count: state.count + 1}))
    }

    componentDidMount(){
        console.log("component did mount")
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    render() { 
        return ( 
            <div>
                <h1>count = {this.state.count}</h1>
                <h5>{this.props.message}</h5>
                <button onClick={this.incrementCountHandler}>increment</button>
            </div>
         );
    }
}
 
export default ClassCounter;