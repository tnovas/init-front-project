import React from 'react';
import Loadable from 'react-loadable';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Home.css';

const Help = Loadable({
  loader: () => import('../help'),
  loading: () => null
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Home extends React.Component {
	constructor(props) {
		super(props);
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
      <div className={this.props.classes.root}>        
       <Grid container spacing={8}>
        <Grid item xs={4}>
          	<Paper className={this.props.classes.paper}> 
	        	<Typography variant="headline" component="h2">
	        		Home
	        	</Typography>
	        	<Button variant="contained" color="primary" onClick={this.test}>Home</Button>
        	</Paper>
        </Grid>
        <Grid item xs={4}>
          	<Help />
        </Grid>
       </Grid>
        
      </div>
    );
  }
}

export default withStyles(styles)(Home)