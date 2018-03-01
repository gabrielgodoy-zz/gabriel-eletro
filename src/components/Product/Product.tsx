import * as React from 'react';
import css from 'styled-jsx/css';

const Product = (props) => (
  <div className="product pointer">
    <img className="mw5 product-image relative" src={props.details.image} alt={props.details.name} />
    <div className="product-name tc">
      {props.details.name}
    </div>

    <style>
      {`
        .product-image {
          bottom: 0;
          transition: bottom 0.4s;
        }

        .product:hover .product-image {
          bottom: 10px;
        }

        .product-name {
          line-height: 20px;
          max-width: 256px;
        }
      `}
    </style>
  </div>
);

export default Product;
