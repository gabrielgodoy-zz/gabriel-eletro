import * as React from 'react';
import Head from 'next/head';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const PageWrapper = (props) => (
  <div>
    <Head>
      <title>Gabriel Eletro</title>
    </Head>
    <Header />
    <div className="mw9 center ph3-ns w-100 pv5">{props.children}</div>
    <Footer />
  </div>
);

export default PageWrapper;
