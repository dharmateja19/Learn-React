import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = ()=>{
    return(
        <div>
            <h1>About Page</h1>
            <Profile name="Dharma" email="dharmateja@gmail.com"/>
            <ProfileClass name="Chandu" email="chandu@gmail.com"/>
        </div>
    )
}
export default About;