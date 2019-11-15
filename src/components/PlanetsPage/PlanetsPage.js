import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';

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
        <ItemDetails personId={selectedPlanet} />
      </div>
    );
  }
}

export default PlanetsPage;
