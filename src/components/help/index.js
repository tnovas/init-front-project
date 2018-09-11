import React from 'react';

export default class Help extends React.Component {
	constructor() {
		super();
		this.test = this.test.bind(this);
	}

	test() {
		console.log(this);
	}

	componentDidMount() {
		window.setTimeout(() => console.log('help'), 1000);
	}

  render() {
    return (
      <div className="Home">
        <h2>Help</h2>
        <button type="button" className="btn btn-primary" onClick={this.test}>Help</button>
      </div>
    );
  }
}