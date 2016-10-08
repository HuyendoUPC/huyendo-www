import React, { Component, PropTypes } from 'react';
import Search from 'react-search'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { airports: [] }
  }

  getItemsAsync (searchValue, cb) {
    const apiKey = 'wr9ymUz88Kpzs6de6DJ0tOpnatnz5Wrl';
    const url = 'http://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=' + apiKey + '&term=' + searchValue;
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

  respondToChoices (list) {
    console.log(list)
  }

  render () {
    return (
      <div>
        <Search items={this.state.airports}
                placeholder="Enter departure city"
                NotFoundPlaceholder="No matching airports found"
                multiple={true}
                onItemsChanged={this.respondToChoices.bind(this)}
                getItemsAsync={this.getItemsAsync.bind(this)} />
      </div>
    )
  }
}

export default SearchBar;
