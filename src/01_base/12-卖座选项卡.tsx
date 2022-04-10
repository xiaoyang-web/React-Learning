import React, { Component } from 'react';
import './style/tabbar.css';

type PropsType = {
  onChange: (index: number) => void;
}

// 底部导航
class Tabbar extends Component<PropsType, any> {
  state = {
    current: 0,
    list: [
      {
        id: 1,
        title: '电影'
      },
      {
        id: 2,
        title: '影院'
      },
      {
        id: 3,
        title: '我的'
      }
    ]
  };

  render() {
    const {
      onChange
    } = this.props;

    return (
      <ul className="tabbar">
        {
          this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={`tabbar-item ${this.state.current === index ? 'active' : ''}`}
              onClick={() => {
                this.setState({
                  current: index
                })
                onChange(index);
              }}
            >
              {item.title}
            </li>
          ))
        }
      </ul>
    );
  }
}

// 电影组件
const Film = () => {
  return (
    <div>电影页面</div>
  );
};

// 影院组件
const Cinema = () => {
  return (
    <div>影院页面</div>
  );
};

// 我的组件
const Profile = () => {
  return (
    <div>我的页面</div>
  );
};

class App extends Component {
  state = {
    currentComponent: <Film />
  }

  showTabPage(index: number) {
    switch (index) {
      case 0:
        return <Film />
      case 1:
        return <Cinema />
      case 2:
        return <Profile />
      default:
        return <div>空</div>
    }
  }

  render() {
    return (
      <div>
        {
          this.state.currentComponent
        }
        <Tabbar
          onChange={
            (index) => {
              this.setState({
                currentComponent: this.showTabPage(index)
              })
            }
          }
        />
      </div>
    );
  }
}

export default App;