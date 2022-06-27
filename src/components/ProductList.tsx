import { toast } from "react-toastify";
import { Product, CartItem } from "../types/types";

const ProductList = ({ products, cart, setCart }: { products: Array<Product>, cart: Array<CartItem>, setCart: React.Dispatch<React.SetStateAction<CartItem[]>> }) => {

    const handleAddToCart = (product: Product) => {
        //Note: Don't save price to cart as the price may change.

        // check if it exists in the cart already
        const existingProduct = cart.find(p => p.name === product.name);
        if (existingProduct) {
            // update the quantity
            setCart(cart.map(p => p.name === product.name ? {...p, quantity: p.quantity + 1} : p));
        } else {
            // add it to the cart
            setCart([...cart, {name: product.name, quantity: 1}]);
        }
        toast.success(`${product.name} added to cart`);
    }

    return (
        <div>
            <h1 className="font-bold text-xl mb-4">Products</h1>
            <table className="w-full">
                <thead>
                    <tr className="text-left font-bold">
                        <th className="py-2">Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.name} className="">
                            <td className="py-2">{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td className="text-right">
                                <button onClick={() => handleAddToCart(product)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded text-xs"
                                >
                                    Add to cart
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;