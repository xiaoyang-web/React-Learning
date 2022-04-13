import React, { Component } from 'react'

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        name: '小杨'
      },
      {
        id: 2,
        name: '小李'
      },
      {
        id: 3,
        name: '小王'
      }
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {item.name}--{index}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
