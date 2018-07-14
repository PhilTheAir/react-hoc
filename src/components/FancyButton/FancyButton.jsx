import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { Btn } from './index';
import { withConsumingContext } from '../../hoc';
import { withForwardingRefs } from '../../hoc';

class FancyButton extends Component {
  componentDidMount() {
    this.props.forwardedRef.current.focus();
  }

  render() {
    const { forwardedRef, label, theme } = this.props;
    return (
      <Fragment>
        <Btn theme={theme}>
          {label}
        </Btn>
        <Btn>
          {label}
        </Btn>
        <Btn innerRef={forwardedRef}>
          {label}
        </Btn>
        <Btn>
          {label}
        </Btn>
      </Fragment>
    );
  }
};

const enhance = compose(
  withForwardingRefs,
  withConsumingContext,
);

export default enhance(FancyButton);