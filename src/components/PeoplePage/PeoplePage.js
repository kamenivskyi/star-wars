import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import Row from '../Row';
import './PeoplePage.css';

class PeoplePage extends Component {
  state = {
    selectedPerson: 4
  };
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;
    const renderItem = item => `${item.name} (${item.birthYear})`;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.props.getData}
      >
        {renderItem}
      </ItemList>
    );
    const personDetails = <PersonDetails personId={selectedPerson} />;
    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
