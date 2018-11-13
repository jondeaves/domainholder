import * as React from 'react';
import { connect as connectStyles } from 'react-fela';

import Link from '../Link';

export interface HeroProps {
  title: string;
  description: string;
  styles: any;
}

export const HeroDefaultProps = {};

export class Hero extends React.PureComponent<HeroProps> {
  static defaultProps = HeroDefaultProps;

  constructor(props: HeroProps) {
    super(props);
  }

  public render(): React.ReactNode {
    const { description, title, styles } = this.props;

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.headingOne}>{title}</h1>
        <h2 className={styles.headingTwo}>{description}</h2>
        <p className={styles.paragraph}>
          Unfortunately there is nothing to see here yet. However this domain
          place holder is brought to you by{' '}
          <Link
            to="https://jondeaves.me"
            isExternal={true}
            isTrusted={true}
            label="Jon Deaves"
          />{' '}
          so go and check out more of what I build.
        </p>
      </div>
    );
  }
}

export const componentStyles = {
  wrapper: () => ({
    left: '50%',
    lineHeight: '2.6rem',
    maxWidth: '520px',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }),

  headingOne: () => ({
    color: '#333333',
    fontSize: '38px',
    textTransform: 'uppercase',
  }),

  headingTwo: () => ({
    color: '#555555',
    fontSize: '21px',
    textTransform: 'uppercase',
  }),

  paragraph: () => ({
    lineHeight: '1.6rem',
  }),
};

export default connectStyles(componentStyles)(Hero);
