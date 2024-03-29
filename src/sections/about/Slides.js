import { useState } from "react";
import { dataSlides } from "./dataSlides";
import '../../App.css';

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
        <div className="slidesContainer"> 
        <div className="slidesBtnAndImage">
        <button className="btnSlides" onClick={previousBtn}> 
        <svg className="slidesSvg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </button> 
    <div>
        <img className="slidesImg" src={image} width='400px' height='500px' alt="villa"/>
    </div>
        <button className="btnSlides" onClick={nextBtn}>
        <svg className="slidesSvg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>
        </button>
        </div> 

    <div className="parContainerSlides">
        <p className="parText"><span className="blueWords">ONE OR TWO</span> BEDROOMS</p>
        <hr/>
        <p className="parText"><span className="blueWords">65 М²</span> LAND</p>
        <hr/>
        <p className="parText"><span className="blueWords">80 М²</span> VILLA</p>
        <hr/>
        <p className="parText"><span className="blueWords">TWO</span> BATHROOMS</p>
        <hr/>
        <p className="parText"><span className="blueWords">GUEST</span> TOILET</p>
        <hr/>
        <p className="parText"><span className="blueWords">12 М²</span> POOL</p>
    </div> 

    <div className="investContainerSlides">
        <h1 className="blueWords parTextHead">THE RETURN ON INVESTMENT IS 5-6 YEARS</h1>
        <h2 className="parTextHead">THAILAND COMPANY AND
            INVEST VISA  FOR FREE</h2>
            <p className="parText">There is access to a shared parking and access road. Each villa has its own private pool and a small garden.</p>
            <p className="parText">The villa is designed with large glass windows for optimal natural light, but at the same time with high ceilings for natural temperature control.</p>
            <p className="parText">This villa combines wooden accents and plants, which give it a stylish, but at the same time down-to-earth look</p>
    </div>
    </div>
        
    )
}

export default Slides;