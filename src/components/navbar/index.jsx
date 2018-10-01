import React from 'react';
import headerStyle from './style.jsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends React.Component {
	render () {
		return (
			<AppBar className={this.props.classes.navbar} position="static">
				<Toolbar>
					<Typography color="primary" variant="title" className={this.props.classes.brand}>
		            	Hola Mundo
		        	</Typography>
                    <Link className={this.props.classes.link} to="/">Home</Link>
                    <Link className={this.props.classes.link} to="/help">Help</Link>
				</Toolbar>
			</AppBar>				
		);
	}
}

export default withStyles(headerStyle)(Navbar)