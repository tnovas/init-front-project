import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

class Help extends React.Component {
    constructor() {
        super();

        this.state = { env: process.env.Variable };
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                Hello Help
                <span> {this.state.env}</span>
            </div>
        );
    }
}

export default withStyles(style)(Help)