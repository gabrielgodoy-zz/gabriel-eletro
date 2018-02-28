import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { getStore } from '../src/store';
import { RootState } from '../src/redux/index';

interface Props {
  state: RootState;
  server: boolean;
  url: {
    pathname: string;
    query: any;
    back();
    push(url, as);
    pushTo(href, as);
    replace(url, as);
    replaceTo(href, as);
  };
}
export class StaticPage<S> extends React.Component<Props, S> {
  private static async getInitialProps({ req }) {
    const server = !!req;
    const store = getStore(undefined, server);
    const state = store.getState();

    return { state, server };
  }

  protected store: Store<RootState>;

  constructor(props) {
    super(props);
    this.store = getStore(props.initialState, props.server);
  }

  public render() {
    return null;
  }
}
