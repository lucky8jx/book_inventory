'use strict';

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: '',
      author: '',
      title: ''
    };
  }

  componentDidMount() {
    findDOMNode(this.refs.isbn).focus();
  }

  handleISBNChange(e) {
    this.setState({
      isbn: e.target.value.trim()
    });
  };

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value.trim()
    });
  };

  handleTitleChange(e) {
    this.setState({
      title: e.target.value.trim()
    });
  };

  handleSubmit(e) {
    const { addBook } = this.props;
    const { isbn, author, title } = this.state;
    e.preventDefault();
    if (!isbn || !author || !title ) {
      return;
    }
    addBook({
      isbn,
      author,
      title
    });
    this.setState({
      isbn: '',
      author: '',
      title: ''
    });
  };

  render() {
    return (
      <form className="bookForm ui form" onSubmit={ this.handleSubmit.bind(this) }>
        <div className="three fields">
          <div className="field">
            <label>ISBN</label>
            <input type="text" placeholder="ISBN" onChange={ this.handleISBNChange.bind(this)} ref="isbn" value={ this.state.isbn } />
          </div>
          <div className="field">
            <label>Author</label>
            <input type="text" placeholder="Author name" onChange= { this.handleAuthorChange.bind(this) } value={ this.state.author } />
          </div>
          <div className="field">
            <label>Title</label>
            <input type="text" placeholder="Book title" onChange= { this.handleTitleChange.bind(this) } value={ this.state.title } />
          </div>
        </div>

        <button className="fluid ui button green right labeled icon" type="submit">
          <i className="right arrow circle outline icon"></i>
          Add new book
        </button>
      </form>
    );
  }
};
