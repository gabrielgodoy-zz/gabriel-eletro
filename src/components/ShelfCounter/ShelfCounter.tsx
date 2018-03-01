import * as React from 'react';
import css from 'styled-jsx/css';

const ShelfCounter = (props) => (
  <div className="shelf-counter-container relative flex items-center flex-column">
    <div className="product-number-title">Número de items</div>
    <div className="input-prepend-append flex justify-center items-center">
      <button
        type="button"
        className="btn btn-prepend btn-decrease"
        onClick={() => props.changeProductsNumber('decrease')}
      >
        {' - '}
      </button>
      <div className="product-number">{props.counter}</div>
      <button
        type="button"
        className="btn btn-append btn-increase"
        onClick={() => props.changeProductsNumber('increase')}
      >
        {' + '}
      </button>

      <style>
        {`
          .product-number-title {
            font-size: 14px;
            margin-bottom: 10px;
          }

          .shelf-counter-container {
            width: 10%;
          }

          .input-prepend-append {
            margin-bottom: 10px;
            font-size: 0;
            white-space: nowrap;
            vertical-align: middle;
            width: 100%;
          }

          .btn {
            display: inline-block;
            padding: 4px 12px;
            margin-bottom: 0;
            min-width: 34px;
            font-size: 14px;
            line-height: 20px;
            color: #333;
            text-align: center;
            text-shadow: 0 1px 1px rgba(255,255,255,0.75);
            vertical-align: middle;
            cursor: pointer;
            background-color: #f5f5f5;
            background-image: linear-gradient(to bottom,#fff,#e6e6e6);
            background-repeat: repeat-x;
            border: 1px solid #ccc;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
            border-bottom-color: #b3b3b3;
            border-radius: 4px;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
          }

          .product-number {
            font-size: 12px;
            margin: 0 10px;
          }
        `}
      </style>
    </div>
  </div>
);

export default ShelfCounter;
