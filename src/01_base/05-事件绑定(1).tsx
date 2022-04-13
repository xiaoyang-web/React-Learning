import React, { Component } from 'react';

class App extends Component {

  handleClick1() {
    console.log('按钮2被点击了');
  }

  handleClick2 = () => {
    console.log('按钮3被点击了');
  };

  handleClick3 = () => {
    console.log('按钮4被点击了');
  };

  render() {
    return (
      <div>
        {/* 方式一：箭头函数，逻辑简单时使用方便 */}
        <button onClick={() => {
          console.log('按钮1被点击了');
        }}>按钮1
        </button>
        {/* 方式二：定义普通函数，然后直接传入，这个会有this指向的问题 */}
        <button onClick={this.handleClick1}>按钮2</button>
        {/* 方式三：定义箭头函数，然后直接传入，不会出现this指向问题 */}
        <button onClick={this.handleClick2}>按钮3</button>
        {/* 方式四：定义箭头函数，在箭头函数中直接执行对应事件函数，推荐使用 */}
        <button onClick={() => this.handleClick3()}>按钮4</button>
      </div>
    );
  }
}

export default App;
