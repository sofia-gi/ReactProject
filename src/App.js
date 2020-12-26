import React, { Component } from 'react';
import Form from './componentes/Form';
import WebItemList from './componentes/WebItemList';
import WebTemplate from './componentes/WebTemplate';

class App extends Component{
  
  //default state
  id = 3 

  state = {
    input: '',
    todos: [
      {id:0, text: 'introduce react', checked: false},
      {id:1, text: 'introduce react', checked: true},
      {id:2, text: 'introduce react', checked: false}
    ]
  }

  //function Form

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.setState({
      todos: [
        //slice는 begin부터 end전까지의 복사본을 새로운 배열 객체로 선언하지만 원본 배열은 변경되지 않음
        //splice는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드 자체는 원본 배열 자체를 수정
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index +1, todos.length)
      ]
    });

 /*   const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
*/
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }


  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return(
      <WebTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <WebItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </WebTemplate>
    );
  }
}

export default App;