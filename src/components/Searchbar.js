import React, { Component, PropTypes } from 'react';
import Search from './Search';
import { FormGroup } from 'react-bootstrap';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { airports: [] }
    this.respondToChoices = this.respondToChoices.bind(this);
    this.getItemsAsync = this.getItemsAsync.bind(this);
  }

  getItemsAsync (searchValue, cb) {
    const apiKey = 'wr9ymUz88Kpzs6de6DJ0tOpnatnz5Wrl';
    const url = 'http://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=' + apiKey + '&term=' + searchValue;
    if (searchValue) {
      fetch(url).then((response) => {
        return response.json();
      }).then((results) => {
        if ( results != undefined ) {
          let items = results.map(function (element) {
            return {value: element.label}
          })
          this.setState({ airports: items })
          cb(searchValue)
        }
      });
    }
  }

  respondToChoices (list) {
    const { action, dispatch } = this.props;
    let airport = list.pop();
    if (airport) {
      dispatch(action(airport.value));
    }
  }

  render () {
    const { placeholder } = this.props;
    return (
      <FormGroup bsSize="lg">
        <Search className="form-control"
                items={this.state.airports}
                placeholder={ placeholder }
                NotFoundPlaceholder="No matching airports found"
                multiple={true}
                onItemsChanged={this.respondToChoices}
                getItemsAsync={this.getItemsAsync} />
      </FormGroup>
    )
  }
}

export default SearchBar;
