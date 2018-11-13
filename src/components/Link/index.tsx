import { Link as GatsbyLink } from 'gatsby';
import { isEmpty, omitBy } from 'lodash';
import * as React from 'react';
import { connect as connectStyles } from 'react-fela';

export interface ILinkProps {
  /** The url the link points to */
  to: string;

  /** Text to wrap link around */
  label: string;

  /** Classes to apply. external will be manually applied if isExternal is true */
  className?: string;

  /** Is this link to an external resource */
  isExternal?: boolean;

  /** Will this link open in a new window/tab (target="_blank") */
  openInNewWindow?: boolean;

  /** If link is not trusted we will add noopener/noreferrer to the rel attribute */
  isTrusted?: boolean;

  /** Inherited from fela connect */
  styles: any;
}

export const LinkDefaultProps = {
  className: '',
  isExternal: false,
  isTrusted: true,
  openInNewWindow: false,
};

export interface ILinkFinalProps {
  className?: string;
  href?: string;
  rel?: string;
  target?: string;
  to: string;
}

export class Link extends React.PureComponent<ILinkProps> {
  static defaultProps = LinkDefaultProps;

  constructor(props: ILinkProps) {
    super(props);
  }

  public render(): React.ReactNode {
    const {
      to,
      label,
      className,
      isExternal,
      openInNewWindow,
      isTrusted,
      styles,
      ...rest
    } = this.props;

    // Calculate what is needed in rel
    let rel: string = '';
    if (isExternal) {
      rel = [rel, 'external'].join(' ');
    }

    if (!isTrusted) {
      rel = [rel, 'noopener', 'noreferrer'].join(' ');
    }

    // Add to class if required
    let tmpClassName: typeof className = className;
    if (isExternal) {
      tmpClassName = [className, 'external'].join(' ');
    }

    const linkProps: ILinkFinalProps = (omitBy(
      {
        className: tmpClassName,
        rel,
        target: openInNewWindow ? '_blank' : undefined,
        to,
      },
      isEmpty,
    ) as object) as ILinkFinalProps;

    if (!isExternal) {
      return (
        <GatsbyLink {...linkProps}>
          {label}
          {isExternal && (
            <span className={styles.externalLabel}> (external link)</span>
          )}
        </GatsbyLink>
      );
    }

    // External links use default <a> element
    linkProps.href = to;
    delete linkProps.to;

    return (
      <a {...linkProps}>
        {label}
        {isExternal && (
          <span className={styles.externalLabel}> (external link)</span>
        )}
      </a>
    );
  }
}

export const componentStyles = {
  externalLabel: () => ({
    left: '-5000px',
    position: 'absolute',
    width: '4000px',
  }),
};

export default connectStyles(componentStyles)(Link);
