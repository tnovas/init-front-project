import React from 'react';
import './Home.css';
import Loadable from 'react-loadable';

const Help = Loadable({
  loader: () => import('../help'),
  loading: () => null
});

export default class Home extends React.Component {
	constructor() {
		super();
		this.test = this.test.bind(this);
	}

	test() {
		console.log(this);
	}

	componentDidMount() {
		window.setTimeout(() => console.log('Home'), 1000);
	}

  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <Help />
        <button type="button" className="btn btn-primary" onClick={this.test}>Home</button>
      </div>
    );
  }
}