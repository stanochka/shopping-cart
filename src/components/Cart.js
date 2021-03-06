import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export const Cart = ({items, addToCart, deleteFromCart, clearCart}) => {
    const [sum, setSum] = useState(0);

    // eslint-disable-next-line
    useEffect(() => {
        items.length ? 
        setSum(items.map(i => i.price * i.count).reduce((a,b) => a+b).toFixed(2)) : 
        setSum(0);
    });

    return (
        <div className='Cart'>
            <h1>Shopping Cart</h1>
            {items.map((item, i) => (
              <div className='CartItem' key={i}>
                <div className='CartItemTitle'><Link to={'/items/' + item.id}>{item.title}</Link></div>
                <img className='CartItemImage' src={item.image} alt={item.title} />
                <div className='CartItemCount'>
                    <button className='CartItemCountBtn' onClick={() => deleteFromCart(item)}>-</button>
                     {item.count} 
                    <button className='CartItemCountBtn' onClick={() => addToCart(item)}>+</button>
                </div>
                <div className='CartPrice'>${(item.price * item.count).toFixed(2)}</div>
              </div>
            ))}
            <div className='CartTotal'>Total: ${sum}</div>
            {sum > 0 && <button className='Payment' onClick={() => {
                alert('Thanks for stopping by!');
                clearCart();
                }}>Proceed to Payment</button>}
        </div>
    )
}
