import React, { Component } from 'react';
class ListItem extends Component{
    render(){
        const {item} = this.props;
        return(
            <ul>
            <li>{item}</li> 
            
          </ul>
        );
    }
}
export default ListItem;