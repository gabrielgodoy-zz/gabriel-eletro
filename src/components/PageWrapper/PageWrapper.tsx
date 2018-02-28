import * as React from 'react';
import Head from 'next/head';
import NavBar from './../NavBar/NavBar';

const PageWrapper = (props) => (
  <div>
    <Head>
      <title>Gabriel Eletro</title>
    </Head>
    <NavBar />
    <div className="mw9 center ph3-ns w-100 pv5">{props.children}</div>
  </div>
);

export default PageWrapper;
