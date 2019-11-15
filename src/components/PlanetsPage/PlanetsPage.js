import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

class PlanetsPage extends Component {
  state = {
    selectedPlanet: 4
  };

  onPlanetSelected = id => {
    this.setState({ selectedPlanet: id });
  };

  render() {
    const { selectedPlanet } = this.state;
    return (
      <div className='row'>
        <ItemList
          onItemSelected={this.onPlanetSelected}
          getData={this.props.getData}
          renderItem={item => item.name}
        />
        <PersonDetails personId={selectedPlanet} />
      </div>
    );
  }
}

export default PlanetsPage;
