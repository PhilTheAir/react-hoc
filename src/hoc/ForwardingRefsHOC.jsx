import React, { forwardRef } from 'react';

export const withForwardingRefs = WrappedComponent => {
  const forwardRefHOC = (props, ref) => <WrappedComponent {...props} forwardedRef={ref} />;
  forwardRefHOC.displayName = `withForwardingRefs(${WrappedComponent.displayName || WrappedComponent.name})`;

  return forwardRef(forwardRefHOC);
};
