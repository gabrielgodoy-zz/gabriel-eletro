import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './../../utils/apollo-client';
import Head from 'next/head';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = (props: PageWrapperProps) => (
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
);

export default PageWrapper;
