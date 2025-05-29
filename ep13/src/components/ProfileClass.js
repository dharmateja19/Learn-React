import React from "react";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor called");
        this.state = {
            count : 0,
            count2 : 100
        }
        // not valid
        // this.state = {
        //     count2 : 0,
        // }
    }
    componentDidMount(){
        console.log('child component didmount called')
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log("child render called")
        return(
            <div style={{
                "border":"2px solid blue",
                "margin":"5px",
                "padding":"10px"
            }}>
                <h1>Using Class Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Email: {this.props.email}</h2>
                <h3>Count : {this.state.count}</h3>
                <h3>Count2 : {this.state.count2}</h3>
                <button onClick={()=>{
                    // this.state.count = this.state.count + 1 //  not valid
                    this.setState({
                        count : this.state.count + 1 ,//no need of this.state.count on lhs
                        count2 : this.state.count2 - 1
                    })
                }}>Increment</button>
            </div>
        )
    }
}
export default ProfileClass