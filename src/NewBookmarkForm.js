import React, { Component } from 'react'
import styled from 'styled-components';

const Box = styled.div`
  margin: 10px 5px;
`;


export default class NewBookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        url:''
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value 
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state)
    this.setState({title: '', url: ''})
  }

  render() {
    return (
      <Box>
        <form onSubmit={this.handleSubmit}>
            <input placeholder='enter name...' autoComplete="off" size="20" value={this.state.title} name='title' onChange={this.handleChange} />
            <input placeholder='enter url...' autoComplete="off" size="20" value={this.state.url} name='url' onChange={this.handleChange} />
            <input type='submit' value='+' />
        </form>
      </Box>
    )
  }
}
