import React, { Component } from 'react';

export const withSubscription = (WrappedComponent, DataSource) => {
  class WithSubscription extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: DataSource
      };
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
      this.setState({
        data: DataSource
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };

  WithSubscription.displayName = `WithSubscription(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithSubscription;
};
