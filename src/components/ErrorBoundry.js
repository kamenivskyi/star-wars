import React, { Component } from 'react';
import ErrorIndicatior from './ErrorIndicatior';

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicatior />;
    return this.props.children;
  }
}

export default ErrorBoundry;
