import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

class Home extends React.Component {
  render() {
    return (
        <section className={this.props.classes.root}>
            <div>Hello Home!</div>
        </section>
    );
  }
}

export default withStyles(style)(Home)