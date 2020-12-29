import { List } from 'immutable';
import React, { Component } from 'react';
import Form from './componentes/Form';
import WebItemColor from './componentes/WebItemColor';
import WebItemList from './componentes/WebItemList';
import WebTemplate from './componentes/WebTemplate';


const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
class App extends Component{
  
  //default state
  id = 3 

  state = {
    input: '',
    todos: [
      {id:0, text: 'introduce react', checked: false},
      {id:1, text: 'introduce react', checked: true},
      {id:2, text: 'introduce react', checked: false}
    ], 
    color: '#343a40'
  }

  //Immutable : 기존의 객체는 건들이지 않고 새 객체를 생성하여 불면함을 유지하며 값을 업데이트하기 위해 사용

/*  state = {
    data: Map({
      input: '',
      todos: List([
        Map({
          id: 0,
          text: 'react',
          checked: false
        }),
        Map({
          id: 1,
          text: 'Immutable',
          checked: true
        }),
        Map({
          id: 2,
          text: 'setting',
          checked: false
        })
      ]),      
      color: '#343a40'
    })
  }
*/

  //function Form
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  }

  /*
  Immutable 
  handleCreate = () => {
    const { data } = this.state;
    this.setState({
      data: data.set('input', '').update('todos', todos => todos.push(Map({
        id: this.id++,
        text: data.get('input'),
        checked: false,
        color: data.get('color')
      })))
      })
  }  
*/
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

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }


  render(){
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return(
      <WebTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          style={color}
        />
      )}
        palette={(
          <WebItemColor colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}>        
        <WebItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </WebTemplate>
    );
  }
}

export default App;
