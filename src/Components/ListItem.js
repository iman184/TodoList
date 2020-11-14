import React, { Component } from 'react';
class ListItem extends Component{

    onRemove=()=>{
        this.props.handleDelete();
    }
    render(){
        const {item, handleDelete} = this.props;
        return(
            <ul>
            <li>{item}
            <div className="row">
                <i className="fa fa-pencil"
                title="Edit" />
                <i className="fa fa-trash"
                title="Delete" 
                onClick={this.onRemove}
                />
                </div>
                </li> 
            
          </ul>
        );
    }
}
export default ListItem;