import * as React from 'react';
import * as classnames from 'classnames';
import NavBar from './../NavBar/NavBar';

export class Header extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div className={classnames('row', 'header')}>
        <h1 className="col-12">header</h1>
        <NavBar />
      </div>
    );
  }
}

export default Header;
