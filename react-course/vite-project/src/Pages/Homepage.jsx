import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';

export function Homepage({ cart }) {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        axios
            .get('/api/products')
            .then((response) => setProducts(response.data))
            .catch((err) => console.error('Failed to load products', err
            ));
                    


    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />
            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="product-container">
                                <div className="product-image-container">
                                    <img
                                        className="product-image"
                                        src={product.image}
                                        alt={product.name || 'product image'}
                                    />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>

                                <div className="product-rating-container">
                                    <img
                                        className="product-rating-stars"
                                        src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                                        alt={`${product.rating.stars} stars`}
                                    />
                                    <div className="product-rating-count link-primary">
                                        {product.ratingCount}
                                    </div>
                                </div>

                                <div className="product-price">
                                    ${(product.priceCents / 100).toFixed(2)}
                                </div>

                                <div className="product-quantity-container">
                                    <select>
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="product-spacer" />

                                <div className="added-to-cart">
                                    <img src="images/icons/checkmark.png" alt="added" />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary">
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
