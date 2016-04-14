import React, { Component, PropTypes } from 'react';

import Book from './Book';

export default class BookList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { removeBook } = this.props;

    let bookNodes = this.props.books.map((book, i) => {
      return (
        <div key={ book.isbn } className="ui segment">
          <Book author={ book.author } title={ book.title } />
          <br />
          <button className="ui red right labeled icon button" onClick={ removeBook.bind(null, i)}>
            <i className="trash icon"></i>
            Delete
          </button>
        </div>
      );
    });

    return (
      <div className="bookList">
        { bookNodes }
      </div>
    );
  }
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired
};
