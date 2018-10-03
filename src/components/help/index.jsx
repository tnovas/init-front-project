import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './style';

import { setValueConsole } from '../../actions';

@connect(mapStateToProps)
@withStyles(style)
class Help extends React.Component {
    constructor(props) {
        super(props);

        this.state = { env: process.env.Variable };

        this.test = this.test.bind(this);        
    }

    test() {
        this.setState({newState: 'Hello!'})
        this.props.dispatch(setValueConsole('Hello word from Help'));
    }

    render() {
        return (
            <Paper className={this.props.classes.paper}>
                <Typography className={this.props.classes.typography} variant="headline" component="h2">
                    <div>Help Page</div>
                    <div>Env: {this.state.env}</div>
                    <div>Redux: {this.props.state.newState.console}</div>
                    <div>Component State: {this.state.newState}</div>
    	        </Typography>
                <Button variant="contained" color="secondary" onClick={this.test}>Help</Button>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

export default Help;