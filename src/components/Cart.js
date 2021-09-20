export const Cart = ({items}) => {
    return (
        <div className='Cart'>
            {items.map((item, i) => <div key={i}>{item.title}</div>)}
        </div>
    )
}