import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Help from './help';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/help" component={Help} />
            </div>
        );
    }
}

export default App;