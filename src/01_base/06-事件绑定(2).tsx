import React, { Component } from 'react'

class App extends Component {
  name = 'alva-yky'

  handleClick1() {
    console.log(`我的名字叫：${this.name}`)
  }

  handleClick2 = (e: React.MouseEvent) => {
    console.log(`我的名字叫：${this.name}`, e)
  }

  handleClick3 = (e: React.MouseEvent, age: string) => {
    console.log(`我的名字叫：${this.name}, 今年${age}岁`, e)
  }

  render() {
    return (
      <div>
        {/* 普通函数中会出现this指向问题，可以使用bind解决，不推荐这种写法 */}
        <button onClick={this.handleClick1.bind(this)}>按钮1</button>
        {/* 箭头函数直接传入，但是不好传递自定义参数 */}
        <button onClick={this.handleClick2}>按钮2</button>
        {/* 最为推荐的写法，即可以避免this指向问题，还可以传递自定义参数 */}
        <button onClick={(e) => this.handleClick3(e, '22')}>按钮3</button>
      </div>
    )
  }
}

export default App

/*
 * React并不会真正的绑定事件在每一个具体的元素身上，而是采用事件代理的方式
 * */

/*
 * 改变this指向的三种方式：
 * （1）call，改变this，自动执行函数
 * （2）apply，改变this，自动执行函数
 * （3）bind，改变this，不会自动执行函数，而是返回改变this指向的函数
 * */

const obj1 = {
  name: 'alva-yky',
  sayName() {
    console.log(this.name)
  }
}

const obj2 = {
  name: 'xiaoming',
  sayName() {
    console.log(this.name)
  }
}

obj1.sayName.bind(obj2)()
obj2.sayName()
