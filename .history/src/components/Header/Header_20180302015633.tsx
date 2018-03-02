import * as React from 'react';
import * as classnames from 'classnames';
import Link from 'next/link';

export default class Header extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div className="row header pt4">
        <Link href="/">
          <a className="logo-link">
            <img className="logo relative pl3 pr3 center db" src="https://goo.gl/z41qMC" />
          </a>
        </Link>

        <div className="pt4 pb4 pl3 pr3 nav-bar custom-gradient-yellow" />

        <style>
          {`
            .header {
              background: #f7f7f7;
            }

            .logo {
              margin-bottom: -35px;
            }

            .custom-gradient-yellow {
              background: linear-gradient(to bottom, rgba(252,231,3,1) 0%, rgba(231,169,0,1) 100%);
            }
          `};
        </style>
      </div>
    );
  }
}
