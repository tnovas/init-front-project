import React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style';

import Navbar from './navbar';
import Home from './home';
import Help from './help';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/help" component={Help} />
            </MuiThemeProvider>
        );
    }
}

export default App;