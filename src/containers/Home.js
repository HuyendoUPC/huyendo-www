import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions';

import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';

import TripList from '../components/triplist';
import SearchBar from '../components/Searchbar';

class Home extends Component {
  constructor(props) {
    super();
    this.state = { inOut: false };
    this.toggleInSearch = this.toggleInSearch.bind(this);
    this.renderInSearch = this.renderInSearch.bind(this);
  }

  toggleInSearch() {
    let { inOut } = this.state;
    console.log('toggle', inOut);
    this.setState({
      inOut: !inOut
    });
  }

  renderInSearch() {
    const { inOut } = this.state;
    if (inOut) {
      return (
        <div>
          <h3>Where do you want to end up?</h3>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Search.." />
          </FormGroup>
        </div>
      );
    }  
  }

  render () {
    return (
        <div className="trips">
          <div className="trips__search">
            <h3>Where do you want to fly from?</h3>
            <FormGroup bsSize="large">
              <FormControl type="text" placeholder="Search.." />
            </FormGroup>
            <SearchBar />
            { this.renderInSearch() }
            <Checkbox ref="inOut" onChange={ this.toggleInSearch } >I don&#39;t want to end where I started</Checkbox>
          </div>
          <div className="trips__list">
            <TripList />
          </div>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { date, inCity, outCity, cities } = state;
  return {
    date,
    inCity,
    outCity,
    cities
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({HomeActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
