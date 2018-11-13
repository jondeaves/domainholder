import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { connect as connectStyles } from 'react-fela';
import Helmet from 'react-helmet';

import 'reset-css';
import Hero from '../components/Hero';

export interface IndexProps {
  styles: any;
}

export const IndexDefaultProps = {};

interface QueryData {
  site: {
    siteMetadata: {
      description: string;
      title: string;
    };
  };
}

export class Index extends React.PureComponent<IndexProps> {
  static defaultProps = IndexDefaultProps;

  constructor(props: IndexProps) {
    super(props);

    this.renderQueryResult = this.renderQueryResult.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={this.renderQueryResult}
      />
    );
  }

  public renderQueryResult(data: QueryData): React.ReactNode {
    const { styles } = this.props;
    const { description, title } = data.site.siteMetadata;

    return (
      <React.Fragment>
        <Helmet>
          <title>{`${title} ${description}`}</title>
        </Helmet>

        <section className={styles.hero}>
          <Hero title={title} description={description} />
        </section>
      </React.Fragment>
    );
  }
}

export const componentStyles = {
  hero: () => ({
    height: '100vh',
    position: 'relative',
  }),
};

export default connectStyles(componentStyles)(Index);
