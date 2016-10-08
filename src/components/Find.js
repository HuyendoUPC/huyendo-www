import React, { Component, PropTypes } from 'react';
import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';
import _ from 'underscore';

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false};
    this.toggle = this.toggle.bind(this);
  }

  formatName(name) {
    return name.split('[')[1].split(']')[0];
  }

  toggle() {
    const { cities, date, inCity, outCity, getTrip, dispatch } = this.props;
    this.setState({
      loading: !this.state.loading,
      progress: 0.5,
    });

    if (!_.isEmpty(inCity) && !_.isEmpty(outCity) && !_.isEmpty(date) && !_.isEmpty(cities)) {
      let start_city = this.formatName(outCity.outCity);
      let end_city = this.formatName(inCity.inCity);
      let start_date = date.date.substring(0, 11);
      start_date = start_date + '00:00:00';
      let formattedCities = {};
      cities.map((city) => {
        formattedCities[this.formatName(city.name)] = city.days;
      });
      console.log(start_city);
      console.log(end_city);
      console.log(start_date);
      console.log(formattedCities);
      dispatch(getTrip({
        start_city: start_city,
        end_city: end_city,
        start_date: start_date,
        cities: formattedCities
      }));
    }
    
  }

  render() {
    return (
        <LaddaButton
        loading={this.state.loading}
        onClick={this.toggle}
        data-color="#eee"
        data-size={XL}
        data-style={SLIDE_UP}
        data-spinner-size={30}
        data-spinner-color="#ddd"
        data-spinner-lines={12}
        >
        Find Trip
        </LaddaButton>
        );
  }
};

export default Find;
