import React, { Component } from 'react';

class App extends Component {
  state = {
    htmlTemplate: '<p>hello world</p>'
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{
          __html: this.state.htmlTemplate
        }} />
      </div>
    );
  }
}

export default App;