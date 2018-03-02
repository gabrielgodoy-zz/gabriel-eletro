import * as React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';
import formatPrice from './../../lib/format-price';

const Product = (props) => (
  <Link href={`/produto?id=${props.details.id}`}>
    <a className="product pointer link" >
      <img
        className="mw5 product-image bottom-0 relative"
        src={props.details.image}
        alt={props.details.name}
      />
      <div className="product-name tc black-60">{props.details.name}</div>
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
    </a>
  </Link>
);

export default Product;
