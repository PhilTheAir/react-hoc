import React, { Component, forwardRef } from 'react';

export const withRenderProp = WrappedComponent => {
  class WithRenderProp extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  };

  WithRenderProp.displayName = `WithRenderProp(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return forwardRef((props, ref) => {
    return <WithRenderProp {...props} forwardedRef={ref} />;
  });

};
