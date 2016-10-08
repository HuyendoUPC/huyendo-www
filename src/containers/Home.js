import React, { Component } from 'react';
import _ from 'underscore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions';

import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';

import TripList from '../components/Triplist';
import Searchbar from '../components/Searchbar';
import Find from '../components/Find';

class Home extends Component {
  constructor(props) {
    super();
    this.state = { inOut: false };
    this.toggleInSearch = this.toggleInSearch.bind(this);
    this.renderInSearch = this.renderInSearch.bind(this);
  }

  toggleInSearch() {
    const { dispatch, outCity } = this.props;
    let { inOut } = this.state;
    if (inOut) {
      dispatch(HomeActions.setInCity(outCity.outCity));
    }
    this.setState({
      inOut: !inOut
    });
  }

  renderInSearch() {
    const { inOut } = this.state;
    const { dispatch } = this.props;
    if (inOut) {
      return (
        <div>
          <h3>Where do you want to end up?</h3>
          <Searchbar placeholder="Arrival City" dispatch={dispatch} action={HomeActions.setInCity} />
        </div>
      );
    }  
  }

  renderOutSearch() {
    let { dispatch, outCity, inCity } = this.props;
    const { inOut } = this.state;
    if (!_.isEmpty(outCity) && _.isEmpty(inCity)) {
      dispatch(HomeActions.setInCity(outCity.outCity));
    }
    return (
       <Searchbar placeholder="Departure city" dispatch={dispatch} action={HomeActions.setOutCity} />
    );
  }

  renderCitySearch() {
    let { dispatch } = this.props;
    return (
          
       <Searchbar placeholder="Add City" dispatch={dispatch} action={HomeActions.addCity} />
    );
  }

  outCity() {
    const { outCity } = this.props;
    return (
      <h3>{ outCity.outCity }</h3>    
    );
  }

  inCity() {
    const { inCity } = this.props;
    return (
      <h3>{ inCity.inCity }</h3>    
    );
  }

  render () {
    const { cities, outCity, inCity } = this.props;
    return (
        <div className="trips">
          <div className="trips__search">
            <h3>Where do you want to fly from?</h3>
            { this.renderOutSearch() }
            { this.renderInSearch() }
            <Checkbox ref="inOut" onChange={ this.toggleInSearch } >I don&#39;t want to end where I started</Checkbox>
            <h4>Flying from: { this.outCity() }</h4>
            <h4>Ending at: { this.inCity() }</h4>
          </div>
          <div className="trips__list">
            { this.renderCitySearch() }
            <TripList cities={ cities }/>
          </div>
          <div className="trips__find">
            <Find />
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

export default connect(mapStateToProps)(Home);
