import React, { Component } from 'react'

interface StateType {
  list: { id: string; content: string }[]
}

class App extends Component {
  inputRef = React.createRef<HTMLInputElement>()

  state: StateType = {
    list: []
  }

  addTodo() {
    const inputElement = this.inputRef.current

    if (!inputElement || !inputElement.value.trim()) {
      return
    }

    const todo = {
      id: String(Date.now()),
      content: inputElement.value
    }
    const newList = [...this.state.list]
    newList.push(todo)
    this.setState({
      list: newList
    })

    inputElement.value = ''
    inputElement.focus()
  }

  removeTodo(index: number) {
    const newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === 'Enter') {
              this.addTodo()
            }
          }}
        />
        <button onClick={() => this.addTodo()}>添加</button>
        {this.state.list.length === 0 ? (
          <div>代办事项列表为空</div>
        ) : (
          <ul>
            {this.state.list.map((item, index) => (
              <li key={item.id}>
                <span>{item.content}</span>
                <button onClick={() => this.removeTodo(index)}>删除</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
