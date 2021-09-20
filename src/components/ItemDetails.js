import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ItemDetails = () => {
    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        console.log(id);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setItem(json));
    // eslint-disable-next-line
    }, []);

    return (
        <main>
            <div className='ItemDetails'>
            <h1>{item.title}</h1>
            <img className='itemDetailsImage' src={item.image} alt={item.title} />
            <div className='price'>${item.price}</div>
            <p>{item.description}</p>
            <div className='category'>{item.category}</div>
            <button className='addToCart'>Add to cart</button>
            </div>
        </main>
    )
}