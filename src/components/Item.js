import { Link } from "react-router-dom";

export const Item = ({item, items, addToCart, deleteFromCart}) => {

    const buttonArea = !items.filter(i => i.id === item.id).length ? 
    <button className='addToCart' onClick={() => addToCart(item)}>Add to cart</button> :
    (<div className='CartItemCount'>
                    <button className='CartItemCountBtn' onClick={() => deleteFromCart(item)}>-</button>
                     {item.count} 
                    <button className='CartItemCountBtn' onClick={() => addToCart(item)}>+</button>
                </div>)

    return (
        <div className='Item' id={item.id}>
            <h2><Link to={'/items/' + item.id}>{item.title}</Link></h2>
            <img className='itemImage' src={item.image} alt={item.title} />
            <div className='price'>${item.price.toFixed(2)}</div>
            <div className='category'>{item.category}</div>
            <div className='rating'>Rating {item.rating.rate} ({item.rating.count} reviews)</div>
            {buttonArea}
        </div>
    )
}