import * as React from 'react';
import css from 'styled-jsx/css';
import ShelfCounter from '../ShelfCounter/ShelfCounter';
import Product from '../Product/Product';

//tslint:disable

const Shelf = (props) => (
  <div className="shelf-container relative flex items-center">
    <div className="shelf absolute bottom-0">
      <div className="bookend_left" />
      <div className="bookend_right" />
      <div className="reflection" />
    </div>

    <div className="products flex relative justify-between">
      {props.products.map((product) => <Product key={product.id} details={product} />)}
    </div>

    <ShelfCounter />

    <style>
      {`
        .products {
          min-height: 300px;
          z-index: 9;
          width: 90%;
        }

        .shelf-container {
          margin-bottom: 90px;
        }

        .shelf {
          width: 90%;
          height: 20px;
          margin: 180px auto 80px;
          background-image: linear-gradient(90deg, #d1d8de 0%, #eff1f3 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eff1f3', endColorstr='#d1d8de', GradientType='0' );
          box-shadow: 0 2px 2px #708698, 0 4px 0 #abb8c3, 0 20px 30px -8px #000000, transparent 0 0 0, transparent 0 0 0, transparent 0 0 0;
        }

        .bookend_left {
          display: block;
          position: absolute;
          left: -25px;
          top: -18px;
          width: 36px;
          height: 36px;
          background-color: #ffffff;
          transform: rotate(35deg);
        }

        .bookend_left_before {
          position: absolute;
          top: 31px;
          left: 17px;
          width: 20px;
          height: 10px;
          background-color: #ffffff;
          content: \"\";
          transform: rotate(-35deg);
        }

        .bookend_right {
          display: block;
          position: absolute;
          right: -25px;
          top: -18px;
          width: 36px;
          height: 36px;
          background-color: #ffffff;
          transform: rotate(-35deg);
        }

        .bookend_right_before {
          position: absolute;
          top: 31px;
          right: 17px;
          width: 20px;
          height: 10px;
          background-color: #ffffff;
          content: \"\";
          transform: rotate(35deg);
        }

        .shelf__reflection {
          display: block;
          position: absolute;
          top: 20px;
          left: 1px;
          width: 99.8%;
          height: 1px;
          background-image: -ms-linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 35%, #ffffff 65%, rgba(255, 255, 255, 0.7) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(255, 255, 255, 0.7)', endColorstr='#ffffff', GradientType='0' );
        }
      `};
    </style>
  </div>
);

export default Shelf;
