const ChangeQuantity = ({quantity, setQuantity}) =>{
    const addQuantity =()=>{
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }
    const removeQuantity =()=>{
        if (quantity <=1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }

    return(
        <div>
            <button className="num" onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button className="num" onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity; 