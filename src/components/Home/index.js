import React, { useContext } from "react"
import AppContext from "../../Store"

export default () => {
    const cartContext = useContext(AppContext);

    const handleCartUpdate = (id) => {
        const proctsState = cartContext.data.products.map(product => ({ ...product, addedToCart: (product.id === id ? !product.addedToCart : product.addedToCart) }));
        cartContext.updateData({ products: proctsState });
    }

    return (
        <div className="row">
            {
                cartContext.data.products.map((product, index) =>
                    <div className="col-12 col-md-3 p-2" key={index}>
                        <div className="card p-2">
                            <img src={product.imageUrl} height={200} width={200} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.details}</p>
                                <p className="text-primary font-weight-bold">₹ {product.price}</p>
                                {
                                    product.addedToCart ? <button className="btn btn-warning" onClick={() => handleCartUpdate(product.id)}>Remove from cart</button>
                                        : <button className="btn btn-success" disabled={product.addedToCart} onClick={() => handleCartUpdate(product.id)}>Add to cart</button>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}