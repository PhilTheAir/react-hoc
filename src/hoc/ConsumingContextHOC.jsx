import React, { createContext } from 'react';

export const withConsumingContext = WrappedComponent => {
  const ThemeContext = createContext('yellow');

  return function (props) {
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };

};
