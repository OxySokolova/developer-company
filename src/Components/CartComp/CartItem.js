import dataProjects from "../../data/dataProjects";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) =>{
    //console.log(cartItem);

    const house = dataProjects.find(item => item.id === cartItem.projId)
    console.log(house);

    const dispatch = useDispatch();

    return(
        <div>
            <p>{house.name}</p>
            <p>{cartItem.quantity} villa(s)</p>
            <p>Price: ${house.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItem: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png " alt="icon"/>
            </span>
        </div>
    )
}
export default CartItem;