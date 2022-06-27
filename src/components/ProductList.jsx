
const ProductList = ({products, cart, setCart}) => {

    const handleAddToCart = (product) => {
        // chekc if it exists in the cart already
        const existingProduct = cart.find(p => p.name === product.name);
        if (existingProduct) {
            // update the quantity
            setCart(cart.map(p => p.name === product.name ? {...p, quantity: p.quantity + 1} : p));
        } else {
            // add it to the cart
            setCart([...cart, {name: product.name, quantity: 1}]);
        }
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.name} className="grid grid-cols-3">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;