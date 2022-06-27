import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    // load cart from local storage
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
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return (
        <div className='max-w-[1240px] mx-auto mt-8 p-4'>
            <h1 className='text-center text-5xl font-bold mb-16 text-gray-600'>Super Store</h1>
            <div className="flex flex-col lg:grid grid-cols-2 gap-24">
                <ProductList products={products} cart={cart} setCart={setCart} />
                <Cart products={products} cart={cart} setCart={setCart} />
            </div>

            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={true}
                theme={'colored'}
            />

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