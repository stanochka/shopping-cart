import { Link } from "react-router-dom";

export const Cart = ({items}) => {
    let sum = items.length ? items.map(i => i.price).reduce((a,b) => a+b).toFixed(2) : 0;

    return (
        <div className='Cart'>
            <h1>Shopping Cart</h1>
            {items.map((item, i) => (
              <div className='CartItem' key={i}>
                <div className='CartItemTitle'><Link to={'/items/' + item.id}>{item.title}</Link></div>
                <img className='CartItemImage' src={item.image} alt={item.title} />
                <div className='CartPrice'>${item.price}</div>
              </div>
            ))}
            <div className='CartTotal'>Total: ${sum}</div>
            <button className='Payment' onClick={() => alert('Thanks for stopping by!')}>Proceed to Payment</button>
        </div>
    )
}
