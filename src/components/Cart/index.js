import React, { useContext } from "react"
import AppContext from "../../Store"
import { withRouter } from "react-router-dom"

export default withRouter((props) => {
    const cartContext = useContext(AppContext);

    const handleCartUpdate = (id) => {
        const productsState = cartContext.data.products.map(product => ({ ...product, addedToCart: (product.id === id ? !product.addedToCart : product.addedToCart) }));
        cartContext.updateData({ products: productsState });
    }

    const handleCheckout = () => {
        const productsState = cartContext.data.products.map(product => ({ ...product, addedToCart: false }));
        cartContext.updateData({ products: productsState });
        props.history.push('/');
    }

    const getSelectedItemsCout = () => {
        return cartContext.data.products.filter(product => product.addedToCart).length;
    }

    const getTotalAmout = () => {
        return cartContext.data.products.reduce((total, product) => total + (product.addedToCart ? product.price : 0), 0);
    }

    return (
        cartContext.data.products.filter(product => product.addedToCart).length ?
            <>
                <div className="row">
                    <div className="col-12 col-md-8 p-4 text-primary font-italic" style={{ fontSize: 20 }}>
                        <div>You have <strong>{getSelectedItemsCout()}</strong> item(s) in your cart</div>
                        <div>Total payable amout is : <strong>{getTotalAmout()}</strong></div>
                    </div>
                    <div className="row no-gutters col-12 col-md-4">
                        <div className="col-6 col-md-12 p-2 d-flex justify-content-center">
                            <button className="btn btn-primary w-100" onClick={() => props.history.push('/')}>Go Home</button>
                        </div>
                        <div className="col-6 col-md-12 p-2 d-flex justify-content-center">
                            <button className="btn btn-success w-100" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        cartContext.data.products.map((product, index) =>
                            product.addedToCart &&
                            <div className="col-12 col-md-3 p-2" key={index}>
                                <div className="card p-2">
                                    <img src={product.imageUrl} height={200} width={200} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.details}</p>
                                        <p className="text-primary font-weight-bold">₹ {product.price}</p>
                                        <button className="btn btn-warning" onClick={() => handleCartUpdate(product.id)}>Remove from cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </>
            :
            <div>
                <h3 className="text-center m-5" style={{ flex: 1 }}>Cart is empty, please add some items to your cart.</h3>
                <div className="p-2 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => props.history.push('/')}>Go Home</button>
                </div>
            </div>
    )
})