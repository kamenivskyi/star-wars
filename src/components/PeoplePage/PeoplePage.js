import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import './PeoplePage.css';

class PeoplePage extends Component {
  state = {
    selectedPerson: 11
  };
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;
    const renderItem = item => `${item.name} (${item.birthYear})`;

    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.props.getData}
        >
          {renderItem}
        </ItemList>
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
