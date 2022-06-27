import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ products, cart, setCart }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        // get the cart total
        const total = cart.reduce((acc, product) => {
            // find the product
            const productToAdd = products.find(p => p.name === product.name);
            return acc + (productToAdd.price * product.quantity);
        }, 0);
        setTotal(total);
    }, [cart, products])


    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(p => p.name !== product.name));
        toast.info(`${product.name} removed from cart`);
    }

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow">
            <h1 className="font-bold text-xl mb-4">Cart</h1>

            {cart.length > 0 ? (
                <>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left font-bold">
                                <th className="py-2">Product</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => {
                                // get the price of this item
                                const product = products.find(p => p.name === item.name);
                                const rowTotal = (product.price * item.quantity).toFixed(2);

                                return (
                                    <tr key={item.name} className="">
                                        <td className="py-2">{item.name}</td>
                                        <td>${product.price.toFixed(2)}</td>
                                        <td>{item.quantity}</td>
                                        <td>${rowTotal}</td>
                                        <td className="text-right">
                                            <button onClick={() => handleRemoveFromCart(item)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded text-xs"
                                                >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className="border-t border-gray-300 mt-8">
                        <p className="font-semibold text-lg text-right mt-4">Total: ${total.toFixed(2)}</p>
                    </div>
                </>
            ) : (
                <div>
                    <p>Your cart is empty</p>
                </div>
            )}

            
        </div>
    )
}

export default Cart;