import React, { Component, PropTypes } from 'react';
import { Table, Panel } from 'react-bootstrap';
import _ from 'underscore';

import TriplistItem from './TriplistItem';

class Triplist extends Component {
  render() {
    const { cities, editDays, dispatch } = this.props;
    return (
        <table>
        <thead>
        <tr>
        <th className="trips__destination">Destination</th>
        <th>Days Spent</th>
        </tr>
        </thead>
        <tbody>
        {cities.map((city) => {
             return (  
                 <TriplistItem city={city} editDays={editDays} dispatch={dispatch} /> 
              );                      
           })}
        </tbody>
        </table>
        );
  }
};

export default Triplist;
