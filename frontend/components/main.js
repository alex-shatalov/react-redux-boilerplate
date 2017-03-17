'use strict';

import React, {Component, PropTypes} from 'react';
import { connect }                   from 'react-redux';
import { bindActionCreators }        from 'redux';
import * as mainActions              from '_app/dal/main/actions';

@connect(
    state => ({
      main: state.mainData
    }),
    (dispatch) => ({
      ...bindActionCreators(mainActions, dispatch)
    })
)

class Main extends Component {

  static propTypes = {

  }

  state = {
  }

  render() {
    return (<div>Hello</div>);
  }
}

export default Main;
