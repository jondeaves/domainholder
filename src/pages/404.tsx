import * as React from 'react';

import Link from '../components/Link';

export class NotFound extends React.PureComponent<{}> {
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <h1>Page not found</h1>

        <Link to="/" label="Go home" />
      </React.Fragment>
    );
  }
}

export default NotFound;
