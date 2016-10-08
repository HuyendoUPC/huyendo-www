import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';

class TripList extends Component {
  render() {
    const { cities } = this.props;
    return (
        <Table>
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
                                    <td><input type="number" min="1" max="30" step="1" value ={ city.days } /></td>
                                    </tr>
                                    );                      
                              })}
        </tbody>
        </Table>
        );
  }
};

export default TripList;
