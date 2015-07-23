import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    message : React.PropTypes.string.isRequired
  }

  constructor () {
    super();
  }

  render () {
    return <h1>{this.props.message}</h1>;
  }
}
