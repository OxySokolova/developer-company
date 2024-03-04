import { useSelector } from 'react-redux';
import CartItem from "./CartItem";
import { getCartItems } from "../../redux/cartSlice";
import { getTotalPrice } from '../../redux/cartSlice';

const Cart = () =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src="https://cdn-icons-png.freepik.com/256/3916/3916648.png?ga=GA1.1.672499557.1709435275&" alt="icon"/>
            <h3>TOTAL: ${totalPrice}</h3>
            {cartItems.map((cartItem, index)=><CartItem key={index} cartItem={cartItem}/>)}
        </div>
    )
}
export default Cart;