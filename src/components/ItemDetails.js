import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ItemDetails = ({ addToCart }) => {
    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setItem(json));
    // eslint-disable-next-line
    }, []);

    return (
         <div className='ItemDetails'>
            <h1>{item.title}</h1>
            <img className='itemDetailsImage' src={item.image} alt={item.title} />
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <div className='category'>{item.category}</div>
            <button className='addToCart' onClick={() => addToCart(item)}>Add to cart</button>
        </div>
    )
}