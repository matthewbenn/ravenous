import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    term: '',
    location: '',
    sortBy: 'best_match' // not super sure about this here//
  };
  this.sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
  this.handleSortByChange = this.handleSortByChange.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
  this.handleLocationChange = this.handleLocationChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
  this.handleEnter = this.handleEnter.bind(this);
}

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });

  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    event.preventDefault();
  }

  handleEnter(event) {
    if (event.keyCode === 13)
    this.handleSearch(event);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
    return <li onClick={this.handleSortByChange.bind(this.sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>
              {sortByOption}
              </li>
              /* I was able to debug this section and get it working,
              but am not able to follow how it works, specifically */
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
      <div className="SearchBar-fields">
        <input onChange={this.handleTermChange} onKeyDown={this.handleEnter} placeholder="Search Businesses" />
        <input onChange={this.handleLocationChange} onKeyDown={this.handleEnter} placeholder="Where?" />
      </div>
    <div className="SearchBar-submit">
      <a onClick={this.handleSearch}>Let's Go</a>
      </div>
</div>
);
  }
}

export default SearchBar;
