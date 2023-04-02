import { Component } from 'react';
import * as Api from '../services/services-api';
import { Searchbar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    per_page: 12,
    images: [],
    showModal: false,
    largeImageURL: '',
    isLoader: false,
    isLoadMore: false,
  };
}
