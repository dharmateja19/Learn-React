import React from "react";
class ProfileClass extends React.Component{
    constructor(){
        super();
        this.state = {
            userDetails:null,
            count:0
        }
        console.log("constructor called")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/LikhithMar14")
        const resData = await data.json();
        console.log(resData)
        this.setState({
            userDetails: resData
        })
        console.log("componentdidmount called")
        this.timer = setInterval(()=>{
            console.log("Dharma")
        },1000)
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){
            console.log('called')
        }
        console.log("componentdidupdate called")
    }
    componentWillUnmount(){
        console.log("componentunmount called")
        clearInterval(this.timer)
    }
    render() {
        console.log("render called")
        if(this.state.userDetails === null) {
            return <h1>Loading ... </h1>
        }
        const {name,login,avatar_url} = this.state.userDetails;
        return (
            <div style={{
                "border":"2px solid blue",
                "margin":"5px",
                "padding":"10px"
            }}>
                <h1>Using Class Component</h1>
                <h2>Name: {name}</h2>
                <h2>Login: {login}</h2>
                <img src={avatar_url}></img>
            </div>
        )
    }
}
export default ProfileClass