import {Component} from "react";
import './App.css';
import video from "./villa.mp4"

class Video extends Component{

    render(){
    return(
        <div>
        <video autoPlay muted loop id="myVideo" playsinline>
            <source src={video} type="video/mp4"/>
        </video>
        </div>
    )
    }
}
export default Video;