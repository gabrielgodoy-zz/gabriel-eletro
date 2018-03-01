import * as React from 'react';
import gql from 'graphql-tag';
import { Home } from '../src/components/Home/Home';
import PageWrapper from '../src/components/PageWrapper/PageWrapper';
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
              name
              price
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
        <style jsx>
          {`
            {
              color: darkred;
            }
          `}
        </style>
        home
        {this.state.products.map((product) => <p key={product.id}>{product.name}</p>)}
      </PageWrapper>
    );
  }
}
