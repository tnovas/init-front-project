import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Help extends React.Component {
	constructor() {
		super();
		this.test = this.test.bind(this);
	}

	test() {
		console.log(this);
	}

	componentDidMount() {
		window.setTimeout(() => console.log('Help'), 1000);
	}

  render() {
    return (
      <Paper className={this.props.classes.paper}> 
    	<Typography variant="headline" component="h2">
    		Help
    	</Typography>
    	<Button variant="contained" color="primary" onClick={this.test}>Help</Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(Help)