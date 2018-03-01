import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import client from './../../lib/apollo-client';
import Head from 'next/head';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const PageWrapper = (props) => (
  <Provider store={this.store}>
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>Gabriel Eletro</title>
        </Head>
        <Header />
        <div className="mw9 center ph3-ns w-100 pv5">{props.children}</div>
        <Footer />
      </div>
    </ApolloProvider>
  </Provider>
);

export default PageWrapper;
