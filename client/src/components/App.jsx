import React from 'react';

import Header from './Header.jsx';
import LoginField from './LoginField.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <LoginField />
      </div>
    )
  }
}


export default App;
