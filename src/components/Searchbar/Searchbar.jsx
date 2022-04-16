import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default class SearchForm extends Component {
  state = {
    searchName: '',
  };

  handleNameSearch = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      return toast.error('Enter a search query');
    }

    this.props.onSubmit(this.state.searchName);
  };

  render() {
    return (
      <header>
        <Toaster />
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameSearch}
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
