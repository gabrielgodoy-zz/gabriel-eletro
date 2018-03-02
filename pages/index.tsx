import * as React from 'react';
import gql from 'graphql-tag';
import PageWrapper from '../src/components/PageWrapper/PageWrapper';
import Shelf from '../src/components/Shelf/Shelf';
import client from './../src/utils/apollo-client';
import { ApolloQueryResult } from 'apollo-client';

interface GraphqlResponse {
  allProducts: Product[];
}

interface IndexState {
  products: Product[];
}

export default class Index extends React.Component<undefined, IndexState> {
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
        <h2 className="page-title tc black-60">Home</h2>
        <Shelf products={this.state.products.slice(0, 5)} />
        <Shelf products={this.state.products.slice(5, 10)} />
        <Shelf products={this.state.products.slice(10)} />
      </PageWrapper>
    );
  }
}
