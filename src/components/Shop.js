import { useState, useEffect } from 'react';
import { Item } from './Item';

export const Shop = ({items, addToCart, deleteFromCart}) => {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setCatalog(json))
    }, [])

    return (
        <div className='ShopWrapper'>
            <h1>Fake Shop Catalog</h1>
            <div className='Shop'>
                {catalog.map(item => <Item key={item.id} 
                                           item={item} 
                                           items={items}
                                           addToCart={addToCart}
                                           deleteFromCart={deleteFromCart}
                                          />)}
            </div>
        </div>
    )
}