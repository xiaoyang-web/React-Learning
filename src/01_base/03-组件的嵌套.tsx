import React, { Component } from 'react';

// 箭头函数写法
const Navbar = () => {
  return (
    <div className="navbar">
      我是navbar
    </div>
  );
};

// 普通函数写法
function Swiper() {
  return (
    <div className="swiper">
      我是swiper
    </div>
  );
}

// 类写法
class Tabbar extends Component {
  render() {
    return (
      <div className="tabbar">
        我是tabbar
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Swiper />
        <Tabbar />
      </div>
    );
  }
}

export default App;