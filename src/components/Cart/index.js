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
                cartContext.data.products.filter(product => product.addedToCart).length ?
                    cartContext.data.products.map((product, index) =>
                        product.addedToCart &&
                        <div className="col-12 col-md-3 p-2" key={index}>
                            <div className="card p-2">
                                <img src={product.imageUrl} height={200} width={200} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.details}</p>
                                    <p className="text-primary font-weight-bold">{product.price}</p>
                                    <button className="btn btn-warning" onClick={() => handleCartUpdate(product.id)}>Remove from cart</button>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <h3 className="text-center m-5" style={{ flex: 1 }}>Cart is empty, please add some items to your cart.</h3>
            }
        </div>
    )
}