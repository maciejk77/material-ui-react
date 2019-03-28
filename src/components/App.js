import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Excercises from './exercises';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Excercises />

        <Footer />
      </Fragment>
    )
  }
}

export default App;
