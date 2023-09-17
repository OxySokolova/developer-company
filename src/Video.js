import {Component} from "react";
import './App.css';
import video from "./villa.mp4"

class Video extends Component{

    render(){
    return(
        <div className="box">
            <div className="video">
            <p className="above first">DEVELOPMENT COMPANY IN BALI</p>
            <p className="above second"> WE WILL BUILD YOUR DREAM VILLA</p>
            </div>
            <video autoPlay muted loop id="myVideo" playsinline>
                <source src={video} type="video/mp4"/>
            </video>
            
        </div>
    )
    }
}
export default Video;