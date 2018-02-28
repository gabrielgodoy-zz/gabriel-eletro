import * as React from 'react';
import css from 'styled-jsx/css';
import Link from 'next/link';

const NavBar = () => (
  <div className="pv1 custom-bg-yellow">
    <div className="mw9 center w-100">
      <ul className="flex list ph2">
        <li className="flex">
          <Link href="/">
            <a className="link black-60">
              <div>Home</div>
            </a>
          </Link>
        </li>
        <li className="flex">
          <Link href="/product">
            <a className="link link-product black-60 mh2">
              <div>Um produto</div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style>
      {`
        .menu-item {
          text-decoration: none;
        }

        .custom-bg-yellow {
          background: #ffd300;
        }
      `};
    </style>
  </div>
);

export default NavBar;
