import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

@connect(mapStateToProps)
@withStyles(style)
class Home extends React.Component {
    render() {
        return (
            <section className={this.props.classes.root}>
                <div>Home Page</div>
                <div>Redux: {this.props.state.newState.console}</div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

export default Home;