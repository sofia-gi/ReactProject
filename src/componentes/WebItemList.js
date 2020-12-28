import React, { Component } from "react";
import WebItem from "./WebItem";


class WebItemList extends Component {

    //리렌더링을 할지 말지 정해주는 컨포넌트
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const {todos, onToggle, onRemove} = this.props;
/*
        const todoList = todos.map(
            (todo) => (
                <WebItem
                {...todo}
                onToggle={onToggle}
                onRemove={onRemove}
                key={todo.id}
                />
            )

        );
*/
        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <WebItem 
                    id = {id}
                    text = {text}
                    checked = {checked}
                    color = {color}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id}
                />
            )
        );



        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default WebItemList;