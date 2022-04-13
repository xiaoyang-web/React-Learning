import React, { Component } from 'react';
import './style/base.css';

class App extends Component {
  render() {
    const name = 'alva-yky';
    const style = {
      fontSize: '20px',
      color: '#00FF00',
      fontWeight: 'bolder'
    }

    return (
      <div>
        <p style={{color: '#FF0000'}}>红色段落，行内样式</p>
        <p className="text-blue">{name}, 引入外部样式</p>
        <p style={style}>太多样式了，单独抽象出一个对象，然后应用样式对象给标签</p>
      </div>
    );
  }
}

export default App;
