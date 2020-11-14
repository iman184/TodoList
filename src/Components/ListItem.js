import React, { Component } from 'react';
class ListItem extends Component{
    render(){
        const {item,handleDelete} = this.props;
        return(
            <ul>
            <li>{item}
            <div className="row">
                <i className="fa fa-pencil"
                title="Edit" />
                <i className="fa fa-trash"
                title="Delete" 
                onClick={handleDelete}
                />
                </div>
                </li> 
            
          </ul>
        );
    }
}
export default ListItem;