import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ItemDetails = ({ items, addToCart, deleteFromCart }) => {
    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setItem(json));
    // eslint-disable-next-line
    }, []);

    const buttonArea = !items.filter(i => i.id === item.id).length ? 
    <button className='addToCart' onClick={() => addToCart(item)}>Add to cart</button> :
    (<div className='CartItemCount'>
                    <button className='CartItemCountBtn' onClick={() => deleteFromCart(item)}>-</button>
                     {items.filter(i => i.id === item.id)[0].count} 
                    <button className='CartItemCountBtn' onClick={() => addToCart(item)}>+</button>
                </div>)

    return (
         <div className='ItemDetails'>
            <h1>{item.title}</h1>
            <img className='itemDetailsImage' src={item.image} alt={item.title} />
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <div className='itemDetailsCategory'>{item.category}</div>
            {buttonArea}
        </div>
    )
}
