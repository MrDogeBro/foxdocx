import Head from 'next/head';

import { Component } from 'react';

type Props = {};
type States = {};

export default class ClassName extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Head>
          <title>Test Title</title>
        </Head>
        <h1>Testing</h1>
      </div>
    );
  }
}
