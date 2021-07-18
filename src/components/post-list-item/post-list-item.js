import React, {Component} from 'react';

export default class PostLostItem extends Component {
    render () {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = "app-list-item d-flex justify-content-between ";
        if (important === true) {
            classNames += 'important'
        }
        if (like === true) {
            classNames += 'like'
        }
        return (
            <div className = {classNames}>
                <span onClick = {onToggleLiked} className = "app-list-item-label">
                    {label}
                </span>
                <div className = "d-flex justify-content-center align-items-center">
                     <button onClick = {onToggleImportant} className = "btn-star btn-sm">
                        <i className = "fa fa-star" aria-hidden = "true"></i>
                     </button>   
                     <button onClick = {onDelete} className = "btn-trash btn-sm">
                        <i className = "fa fa-trash-o"></i>    
                     </button> 
                     <i className = "fa fa-heart"></i>
                </div>
            </div>
        )
    }
}