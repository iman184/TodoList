import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'
import List from './Components/List'
class App extends Component{
  state = {
    data:[{todo:"cooking"},{todo:"watching movies"},{todo:"Dev At"}]
};
  handleSubmit = (newVal)  =>{
 this.setState({data:[...this.state.data, newVal]})
  }
render(){
  const{data}=this.state;
  return(
    <div className='app'>
      <Form onSubmit={this.handleSubmit}/>
      <h1>To do list</h1>
      <List todo={data} />
    </div>
  );
}
}
 
export default App;


