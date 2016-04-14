'use strict';

import React, { Component, PropTypes } from 'react';

export default class Book extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { author, title } = this.props;
    return (
      <div className="book">
        <h2 className="title">{ title }</h2>
        <p className="author">{ author }</p>
      </div>
    );
  }
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
