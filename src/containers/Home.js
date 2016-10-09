import React, { Component } from 'react';
import _ from 'underscore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions';

import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import TripList from '../components/Triplist';
import Searchbar from '../components/Searchbar';
import Find from '../components/Find';
import TripResults from '../components/TripResults';

class Home extends Component {
  constructor(props) {
    super();
    let now = new Date().toISOString();
    this.state = { inOut: false, localDate: now };
    this.toggleInSearch = this.toggleInSearch.bind(this);
    this.renderInSearch = this.renderInSearch.bind(this);
    this.dateChange = this.dateChange.bind(this);
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

  dateChange(value) {
    let { dispatch } = this.props;
    if (value) {
      dispatch(HomeActions.setDate(value));
    }
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
    const { cities, outCity, inCity, date, trip, dispatch } = this.props;
    const { localDate } = this.state;
    return (
        <div className="trips">
          <div className="trips__search">
            <h3>Where do you want to fly from?</h3>
            { this.renderOutSearch() }
            { this.renderInSearch() }
            <Checkbox ref="inOut" onChange={ this.toggleInSearch } >I don&#39;t want to end where I started</Checkbox>
            <h4>Flying from: { this.outCity() }</h4>
            <h4>Ending at: { this.inCity() }</h4>
            <h3>What date do you want to leave?</h3>
            <FormGroup>
              <DatePicker className="datepicker" value={ localDate } onChange={this.dateChange} />
            </FormGroup>
          </div>
          <div className="trips__list">
            <h3>Which cities do you want to travel to?</h3>
            { this.renderCitySearch() }
            <TripList editDays={HomeActions.editDays} dispatch={dispatch} cities={ cities }/>
          </div>
          <div className="trips__find">
            <Find dispatch={dispatch} getTrip={HomeActions.getTrip} inCity={inCity} outCity={outCity} date={date} cities={cities} />
          </div>
          <div className="trips__results">
            <TripResults trip={ trip }/>
          </div>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { date, inCity, outCity, cities, trip } = state;
  return {
    date,
    inCity,
    outCity,
    cities,
    trip
  };
}

export default connect(mapStateToProps)(Home);
