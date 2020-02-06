import React, { Component } from 'react';
import Spinner from '../Spinner';
import ErrorIndicatior from '../ErrorIndicatior';

const withData = (ViewComponent, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      getData()
        .then(data => this.setState({ data, loading: false }))
        .catch(this.handleError);
    }

    handleError = error => {
      this.setState({ error: true, loading: false });
    };

    render() {
      const { data, loading, error } = this.state;
      const hasData = !(loading || error);

      if (loading) return <Spinner />;
      if (error) return <ErrorIndicatior />;
      if (hasData) return <ViewComponent {...this.props} data={data} />;
    }
  };
};

export default withData;
