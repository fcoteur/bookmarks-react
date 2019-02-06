import React, { Component } from 'react'
import styled from 'styled-components';
import BookmarksList from './BookmarksList'

const Box = styled.div`
  margin: 10px 5px;
  width: 400px;
  text-align: left;
`;

export default class App extends Component {
  render() {
    return (
      <Box>
        <h2>Bookmarks</h2>
        <BookmarksList />
      </Box>
    )
  }
}
