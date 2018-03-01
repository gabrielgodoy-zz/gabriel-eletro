import * as React from 'react';
import gql from 'graphql-tag';
import PageWrapper from '../src/components/PageWrapper/PageWrapper';
import Shelf from '../src/components/Shelf/Shelf';
import client from './../src/lib/apollo-client';
import { StaticPage } from './_page';
import { ApolloQueryResult } from 'apollo-client';

interface GraphqlResponse {
  allProducts: object[];
}

export default class Index extends StaticPage<{}> {
  public state = {
    products: [],
  };

  public componentDidMount() {
    client
      .query({
        query: gql`
          {
            allProducts {
              id
              sku
              name
              price
              image
            }
          }
        `,
      })
      .then((response: ApolloQueryResult<GraphqlResponse>): void =>
        this.setState({ products: response.data.allProducts }),
      );
  }

  public render() {
    return (
      <PageWrapper>
        <Shelf products={this.state.products.slice(0, 5)} />
        <Shelf products={this.state.products.slice(5, 10)} />
        <Shelf products={this.state.products.slice(10)} />
      </PageWrapper>
    );
  }
}
