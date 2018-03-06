import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { DEV, SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE } from '../../constants/env';
import client from './../../utils/apollo-client';
import Head from 'next/head';
import Header from './../../containers/Header/Header';
import Footer from './../../components/Footer/Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default class PageWrapper extends React.Component<PageWrapperProps, undefined> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
            />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={SITE_TITLE} />
            <meta property="og:description" content={SITE_DESCRIPTION} />
            <meta property="og:image" content={SITE_IMAGE} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={SITE_NAME} />
            <meta name="twitter:title" content={SITE_TITLE} />
            <meta name="twitter:description" content={SITE_DESCRIPTION} />
            <meta property="twitter:image" content={SITE_IMAGE} />

            <link rel="shortcut icon" href="https://goo.gl/MuYhrE" />
            <link
              href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
              rel="stylesheet"
            />
            <link
              href="//cdnjs.cloudflare.com/ajax/libs/tachyons/4.8.1/tachyons.min.css"
              rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
            <style>
              {`
                body {
                  -webkit-font-smoothing: antialiased;
                  font-family: ${'Open Sans'}, sans-serif;
                  outline: 0;
                }

                button:focus {
                  outline:0;
                }
              `}
            </style>

            <script
              // tslint:disable-next-line
              src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"
            />
            <title>Gabriel Eletro</title>
          </Head>
          <Header />
          <div className="mw9 center ph3-ns w-100 pv5">{this.props.children}</div>
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}
