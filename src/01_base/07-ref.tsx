import React, { Component } from 'react';

class App extends Component {
  inputRef = React.createRef<HTMLInputElement>();


  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />

        <button
          onClick={() => {
            console.log(this.inputRef.current?.value);
          }}
        >
          获取输入值
        </button>
      </div>
    );
  }
}

export default App;