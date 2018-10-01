import React from 'react';
import { Route, Link } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { theme, style } from './style';
import Home from './home';
import Help from './help';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Link className={this.props.classes.link} to="/">Home</Link>
                <Link className={this.props.classes.link} to="/help">Help</Link>

                <Route exact path="/" component={Home} />
                <Route exact path="/help" component={Help} />
            </MuiThemeProvider>
        );
    }
}

export default withStyles(style)(App);