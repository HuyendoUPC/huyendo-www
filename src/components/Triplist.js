import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';

class TripList extends Component {
  render() {
    const { cities } = this.props;
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
                                    <tr>
                                    <td>{ city.name }</td>
                                    <td><input type="number" min="1" max="30" step="1" className="trips__numDays"/></td>
                                    </tr>
                                    );                      
                              })}
        </tbody>
        </table>
        );
  }
};

export default TripList;
