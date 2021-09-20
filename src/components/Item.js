import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return (
        <div className='Item' id={item.id}>
            <h2><Link to={'/items/' + item.id}>{item.title}</Link></h2>
            <img className='itemImage' src={item.image} alt={item.title} />
            <div className='price'>${item.price}</div>
            <div className='category'>{item.category}</div>
            <div className='rating'>Rating {item.rating.rate} ({item.rating.count} reviews)</div>
            <button className='addToCart'>Add to cart</button>
        </div>
    )
}