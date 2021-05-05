import React from "react";
import "./TodoItem.css";



  class Todo extends React.Component {
    constructor(){
      super();
  
      this.state = {
        checked: false
      }
    }
  
    // Görev Kontrol
    taskCheck =(e) => {
      this.setState({checked: !this.state.checked })

      if(e.target.className === 'nanChecked'){ 
        e.target.classList.add('checked');
        e.target.classList.remove('nanChecked')
      }else{
         e.target.classList.add('nanChecked');
         e.target.classList.remove('checked');
        }
    }
    

    render(){
      const { content,id } = this.props;
      return (
        <div
          key={this.props.key}
          className={"nanChecked"}
          onClick={this.taskCheck} >
            <span>{content}</span>
            <button 
              className={"btn-danger buton"}
              onClick={(event) => this.props.deleteTaskProp(id)}>
                SİL
            </button>
        </div>
       
      );
    }
}

export default Todo;



