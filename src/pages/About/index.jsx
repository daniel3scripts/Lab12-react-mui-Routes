
import { useParams } from "react-router-dom";
const About =() =>{
    const {dl}= useParams();
    return (
        <div>
            <h1>About!!!</h1>
            <p>This is the about pages DL : {dl}</p>
        </div>
    );
};
export default About;