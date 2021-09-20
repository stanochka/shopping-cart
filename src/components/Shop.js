import { useState, useEffect } from 'react';
import { Item } from './Item';

export const Shop = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return (
        <div className='Shop'>
            {items.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}