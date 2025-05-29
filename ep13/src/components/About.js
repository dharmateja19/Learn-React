import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
// const About = ()=>{
//     return(
//         <div>
//             <h1>About Page</h1>
//             <Profile name="Dharma" email="dharmateja@gmail.com"/>
//             <ProfileClass name="Chandu" email="chandu@gmail.com"/>
//         </div>
//     )
// }
// export default About;

class About extends Component{
    constructor(){
        super();
        console.log("patent ctr is called")
    }
    componentDidMount(){
        console.log("parent mount called")
    }
    render(){
        console.log("parent render called")
        return(
            <div>
            <h1>About Page</h1>
            <div>
                <ProfileClass name="Chandu" email="chandu@gmail.com"/>
                <ProfileClass name="Teja" email="teja@gmail.com"/>
            </div>
        </div>
        )
    }
}
export default About;