import { useState } from "react";
import { dataSlides } from "./dataSlides";
import './App.css';

function Slides() {
    const [villa, setVilla] = useState(0);
    const {image} = dataSlides[villa];
    
    const previousBtn = () => {
        setVilla (villa => {
            villa --;
            if (villa < 0) {
                villa = dataSlides.length-1;
            }
            return villa;
        })
    }
    const nextBtn = () => {
        setVilla (villa => {
            villa ++;
            if(villa>dataSlides.length-1) {
                villa = 0;
            }
            return villa;
        })
    }
    return(
        <div>
        <div className="slidesContainer">
    <div>
        <img src={image} width='400px' height='500px' alt="villa"/>
    </div>
    <div className="parContainer">
        <p>ONE OR TWO BEDROOMS</p>
        <hr/>
        <p>65 М² LAND</p>
        <hr/>
        <p>80 М² VILLA</p>
        <hr/>
        <p>TWO BATHROOMS</p>
        <hr/>
        <p>GUEST TOILET</p>
        <hr/>
        <p>12 М² POOL</p>
    </div>
    </div>

    <div className="btnContainer">
        <button className="btn" onClick={previousBtn}>Previous</button>
        <button className="btn" onClick={nextBtn}>Next </button>
    </div>
        
        </div>
    )
}

export default Slides;