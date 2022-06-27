import { useState } from "react";

const Cart = ({ products, cart, setCart }) => {

    const [total, setTotal] = useState(0);

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(p => p.name !== product.name));
    }

    return (
        <div>
            <h1>Cart</h1>
            {cart.map(item => {

                // get the price of this item
                const product = products.find(p => p.name === item.name);
                const rowTotal = (product.price * item.quantity).toFixed(2);
               
                return (
                    <li key={item.name} className="grid grid-cols-5">
                        <p>{item.name}</p>
                        <p>{product.price.toFixed(2)}</p>
                        <p>{item.quantity}</p>
                        <p>{rowTotal}</p>
                        <button onClick={() => handleRemoveFromCart(item)}>
                            Remove from cart
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default Cart;