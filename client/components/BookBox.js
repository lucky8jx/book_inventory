'use strict';

import React, { Component, PropTypes } from 'react';

import BookList from './BookList';
import BookForm from './BookForm';

export default class BookBox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.initialBooks
    };
  }

  addBook(book) {
    let books = this.state.books;
    books.unshift(book);
    this.setState({
      books
    });
  }

  removeBook(index) {
    let books = this.state.books;
    books.splice(index, 1);
    this.setState({
      books
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="ui container">
        <h1 className="title ui center aligned dividing header">Book Inventory</h1>
        <BookForm addBook={ this.addBook.bind(this) } />
        <div className="ui items">
          <BookList books={ books } removeBook={ this.removeBook.bind(this) } />
        </div>
      </div>
    );
  }
};

BookBox.defaultProps = {
  initialBooks: [
    {
      title: 'Twilight',
      author: 'Stephanie Meyer',
      isbn: '0316015849'
    }
  ]
};

BookBox.propTypes = {
  initialBooks: PropTypes.array.isRequired
};
