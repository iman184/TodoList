import React, { Component } from 'react';
class Form extends Component{
    inputValue = {
        todo:''
    }
    state=this.inputValue;

    handleInput=(e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    };
    handleOnSubmit=(e)=>{
        e.preventDefault();
       this.props.onSubmit(this.state);
    }
    render(){
        const {todo} = this.state;
    return(
        <form onSubmit={this.handleOnSubmit}>
      <input 
      type='text'
      name='todo'
      id='todo'
      value={todo}
      onChange={this.handleInput}
       required></input>

      <button type='submit'>Create</button>
      </form>
        );
    }
}
export default Form;