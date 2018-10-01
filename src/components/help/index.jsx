import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './style';

class Help extends React.Component {
    constructor() {
        super();

        this.state = { env: process.env.Variable };

        this.test = this.test.bind(this);        
    }

    test() {
        console.log(this);
    }

    render() {
        return (
            <Paper className={this.props.classes.paper}>
                <Typography className={this.props.classes.typography} variant="headline" component="h2">
                    Help
                    <span> {this.state.env}</span>
    	        </Typography>
                <Button variant="contained" color="secondary" onClick={this.test}>Help</Button>
            </Paper>
        );
    }
}

export default withStyles(style)(Help);