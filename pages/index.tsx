import * as React from "react";
import { Provider, Store } from "react-redux";
import { Home } from "../src/components/Home";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import { StaticPage } from "./_page";

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <PageWrapper>
          <Home />
        </PageWrapper>
      </Provider>
    );
  }
}
