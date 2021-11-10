import React from 'react'

const Basket = ({ cartItems, onAdd, onRemove }) => {
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const taxPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + taxPrice;

    return (
        <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
        </div>
        {cartItems.map(item => (
            <div key={item.id}>
                <div>
                    {item.name}
                </div>
                <div>
                    <button onClick={() => onAdd(item)}>+</button>
                    <button onClick={() => onRemove(item)}>-</button>
                </div>
            <div>
                {item.quantity} x ${item.price.toFixed(2)}
            </div> 
        </div>                    
        ))}  
        {cartItems.length !== 0 && (
            <>
            <div>Items Price</div>
            <div>${itemsPrice.toFixed(2)}</div>
            <div>Tax Price</div>
            <div>${taxPrice.toFixed(2)}</div>
            <strong>Total Price</strong>
            <div>${totalPrice.toFixed(2)}</div>
            <div>
                <button onClick={() => alert('Implement Checkout')}>Checkout</button>
            </div>
            </>
        )} 
        </aside>
    )
}

export default Basket;