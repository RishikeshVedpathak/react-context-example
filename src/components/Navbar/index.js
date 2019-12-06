import React, { useContext } from "react";
import AppContext from "../../Store"
import { Link } from "react-router-dom";

export default () => {
  const cartContext = useContext(AppContext);

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><strong>ReactAmazon</strong><sup style={{fontSize:14}}><i>(a React Context example)</i></sup></Link>
      <div className="justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <i className="fas fa-shopping-cart" style={{ fontSize: 22 }}></i>
              <span className="ml-1" style={{ position: 'absolute', top: 5, right: 10, borderRadius: '50px', background: 'red', padding: '2px 5px', color: '#fff', fontSize: 10 }}>{cartContext.data.products.filter(product => product.addedToCart).length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
