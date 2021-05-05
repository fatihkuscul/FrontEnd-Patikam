import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {

  render(){
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <li className={"list-group-item"} >
                <TodoItem {...todo} 
                key={todo.id} 
                deleteTaskProp={this.props.silProps}/>               
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
