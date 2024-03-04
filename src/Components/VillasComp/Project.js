import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../CartComp/ChangeQuantity";
import { useDispatch } from 'react-redux';
import { useState } from "react";

const Project = ({proj}) =>{
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    return(
        <div>
            <h2>{proj.name}</h2>
            <p>${proj.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="booking" onClick={() =>{dispatch(addItemToCart({proj, quantity}))}}>Book</button>
        </div>
    )
}
export default Project;