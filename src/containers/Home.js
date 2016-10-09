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
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    tomorrow = tomorrow.toISOString();
    this.state = { inOut: false, localDate: tomorrow };
    this.toggleInSearch = this.toggleInSearch.bind(this);
    this.renderInSearch = this.renderInSearch.bind(this);
    this.dateChange = this.dateChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { outCity } = nextProps;
    const { dispatch, outCity: oldOut } = this.props;
    const { inOut } = this.state;
    if (!inOut && outCity.outCity && oldOut.outCity) {
      if (oldOut.outCity !== outCity.outCity) {
        dispatch(HomeActions.setInCity(outCity.outCity));
      }
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    tomorrow = tomorrow.toISOString();
    dispatch(HomeActions.setDate(tomorrow));
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
    const { inOut } = this.state;
    if (outCity.outCity && !inOut) {
      return (
        <div>
          <h4>Flying From/To:</h4>
          <h3>{ outCity.outCity }</h3>
        </div>
      );
    } else if (outCity.outCity && inOut) {
      return (
        <div>
          <h4>Flying From:</h4>
          <h3>{ outCity.outCity }</h3>
        </div>
      );
    } else {
      return (<div/>);
    }
  }

  inCity() {
    const { inCity } = this.props;
    const { inOut } = this.state;
    if (inCity.inCity && inOut) {
      return (
        <div>
          <h4>Returning To:</h4>
          <h3>{ inCity.inCity }</h3>
        </div>
      );
    } else {
      return (<div/>);
    }
  }

  render () {
    const { cities, outCity, inCity, date, trip, dispatch, editDays, removeCity } = this.props;
    const { localDate } = this.state;
    return (
        <div className="trips">
          <div className="trips__search">
            <h3>Where do you want to fly from?</h3>
            { this.renderOutSearch() }
            { this.renderInSearch() }
            <Checkbox ref="inOut" onChange={ this.toggleInSearch } >I don&#39;t want to end where I started</Checkbox>
            <div>{ this.outCity() }</div>
            <div>{ this.inCity() }</div>
            <h3>What date do you want do leave?</h3>
            <FormGroup>
              <DatePicker className="datepicker" value={ localDate } onChange={this.dateChange} />
            </FormGroup>
          </div>
          <div className="trips__list">
            <h3>Which cities do you want to travel to?</h3>
            { this.renderCitySearch() }
            <TripList editDays={editDays} removeCity={removeCity} cities={ cities }/>
          </div>
          <div className="trips__find">
            <Find dispatch={dispatch} getTrip={HomeActions.getTrip} inCity={inCity} outCity={outCity} date={date} cities={cities} trip={trip} />
          </div>
          <div className="trips__results">
            <TripResults trip={ trip }/>
          </div>
        </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editDays: (id, newDays) => {
      dispatch(HomeActions.editDays(id, newDays))
    },
    removeCity: (id) => {
      dispatch(HomeActions.removeCity(id))
    },
    dispatch
  }

}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
