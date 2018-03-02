import * as React from 'react';
import css from 'styled-jsx/css';

function formatPrice(price) {
  const priceInString = price.toString();
  const cents = priceInString.slice(-2);
  const reais = priceInString.slice(0, priceInString.length - 2);

  return `R$ ${reais},${cents}`;
}

const Product = (props) => (
  <div
    className="product pointer"
    onClick={() => props.changeToProductDetails(props.details.id)}
  >
    <img
      className="mw5 product-image bottom-0 relative"
      src={props.details.image}
      alt={props.details.name}
    />
    <div className="product-name tc">{props.details.name}</div>
    <div className="product-price f2 b tc">{formatPrice(props.details.price)}</div>

    <style>
      {`
        .product-image {
          transition: bottom 0.4s;
        }

        .product:hover .product-image {
          bottom: 10px;
        }

        .product-name {
          line-height: 20px;
          max-width: 256px;
          min-height: 40px;
        }

        .product-price {
          color: #1f871c;
        }
      `}
    </style>
  </div>
);

export default Product;
