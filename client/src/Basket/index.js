import React from 'react'
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Basket = ({ cartItems, onAdd, onRemove }) => {
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const taxPrice = itemsPrice * 0.08;
    const totalPrice = itemsPrice + taxPrice;
    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalPrice,
              },
            },
          ],
        });
      }
    
    const onApprove = (data, actions) => {
        return actions.order.capture();
      }

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
            <div>Items Price:</div>
            <div>${itemsPrice.toFixed(2)}</div>
            <div>Tax Price:</div>
            <div>${taxPrice.toFixed(2)}</div>
            <strong>Total Price:</strong>
            <div>${totalPrice.toFixed(2)}</div>
            <div>
              <strong>Checkout With:</strong>
                <PayPalButton 
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
            </>
        )} 
        </aside>
    )
}

export default Basket;