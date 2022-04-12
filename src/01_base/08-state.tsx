import React, { Component } from 'react';

interface StateType {
  name: string,
  age: number
}

class App extends Component<Record<string, any>, StateType> {
  constructor(props: Record<string, any>) {
    super(props);
    this.state = {
      name: 'alva-yky',
      age: 23
    }
  }

  render() {
    return (
      <div>
        <p>我的名字叫{this.state.name}, 我今年{this.state.age}岁了</p>
      </div>
    );
  }
}

export default App;