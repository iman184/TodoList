import React, { Component } from 'react';
class ListItem extends Component{
myRef=React.createRef();

    onRemove=()=>{
       this.myRef.current.className="active";
        setTimeout(()=>{
            this.props.handleDelete();
        },200)
        
    }
    render(){
        const {item, handleDelete} = this.props;
        return(
            <ul>
            <li ref={this.myRef}>{item}
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