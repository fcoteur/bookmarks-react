import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Box = styled.div`
  margin: 10px 5px;
`;

export default class Bookmark extends Component {
  static propTypes = {
    bookmark: PropTypes.shape({
      id: PropTypes.strig,
      title: PropTypes.string,
      url: PropTypes.string
    }).isRequired,
    delete: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
        id: '',
        title: '',
        url: '',
        edit: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      id: this.props.bookmark.id,
      title: this.props.bookmark.title,
      url: this.props.bookmark.url,
      edit: true
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit() {
    this.props.edit(this.state)
    this.setState({
      id: '',
      title: '',
      ulr:'',
      edit: false
    })
  }

  render() {
    return (
      <Box>
        <span style={{cursor: "pointer"}} onClick={this.props.delete}>{String.fromCharCode(0xD83D,0xDDD1)}</span>{' '}
        
        <div style={{display: this.state.edit === true ? "none" : "inline"}}>
          <span onClick={this.handleClick}>{this.props.bookmark.title}</span> {' - '}
          <a href={this.props.bookmark.url}><span>{this.props.bookmark.url}</span></a>
        </div>
        
        <div style={{display: this.state.edit === false ? "none" : "inline"}}>
          <input 
            id={this.props.bookmark.id}
            value={this.state.title} 
            autoComplete="off" 
            name='title' 
            onChange={this.handleChange} 
            onBlur={this.handleSubmit}
          /> {' '}
          <input 
            id={this.props.bookmark.id}
            value={this.state.url} 
            autoComplete="off" 
            name='url'
            onChange={this.handleChange} 
          />
        </div>
      </Box>
    )
  }
}