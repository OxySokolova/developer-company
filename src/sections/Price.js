import { useState } from "react";
import generalPlan from '../assets/generalPlan.png';
import twoBedroom from '../assets/twoBedroom.png';
import oneBedroom from '../assets/oneBedroom.png';


function Price() {
    const [general, setGeneral] = useState(generalPlan);
    
    return(
        <div>
        <div className="priceBox">
    <div className="priceItem">
        <h2 className="priceNumber">149 000$</h2>
        <p className="priceText">without rice fields view</p>
    </div>
    <div className="priceItem">
        <img src="https://static.tildacdn.com/tild3130-3131-4232-b762-346664303064/free-icon-dollar-sym.png" width="80px" alt="icon"/>
    </div>
    <div className="priceItem">
        <h2 className="priceNumber">169 000$</h2>
        <p className="priceText">with rice fields view</p>
    </div>
        </div>

        <div className="priceButton">
        <button className="priceBtn" onClick={() => {setGeneral(generalPlan)}}>GENERAL PLAN</button>
        <button className="priceBtn" onClick={() => {setGeneral(twoBedroom)}}>TWO BEDROOM</button>
        <button className="priceBtn" onClick={() => {setGeneral(oneBedroom)}}>ONE BEDROOM</button>
        </div>

        <div className="priceImage"> 
        <img className="generalPlan" src={general} alt="photoPlan"/>
        </div>

        </div>
    )
}

export default Price;