import React, { Component } from 'react';
import SwapiService from '../services/SwapiService';
import Spinner from './Spinner';
import ErrorIndicatior from './ErrorIndicatior';

class ItemList extends Component {
  state = {
    items: [],
    loading: true,
    error: false
  };
  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then(items => this.setState({ items, loading: false }))
      .catch(this.handleError);
  }

  handleError = error => {
    this.setState({ error: true, loading: false });
  };

  renderItems = array => {
    return array.map(item => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <li
          className='list-group-item'
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { items, loading, error } = this.state;
    const hasData = !(loading || error);
    if (loading) return <Spinner />;
    return (
      <>
        {error && <ErrorIndicatior />}
        {hasData && <ul className='list-group'>{this.renderItems(items)}</ul>}
      </>
    );
  }
}

export default ItemList;
