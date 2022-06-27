import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';


function App() {

    const [cart, setCart] = useState(() => {
        try {
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            return []
        }
    });

    // on cart change save to local storage
    useEffect(() => {
        console.log({cart});
        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart])

    return (
        <div className=" grid grid-cols-2 gap-8">
            <ProductList products={products} cart={cart} setCart={setCart} />
            <Cart products={products} cart={cart} setCart={setCart} />
        </div>
    );
}

export default App;


const products = [
    {
        name: "Sledgehammer",
        price: 125.76
    },
    {
        name: "Axe",
        price: 190.50
    },
    {
        name: "Bandsaw",
        price: 562.13
    },
    {
        name: "Chisel",
        price: 12.9
    },
    {
        name: "Hacksaw",
        price: 18.45
    }
];