import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map (item => {
        if (typeof item === 'object') {
            const {id, ...items} = item;
            return (
                <li key = {id} className = "list-group-item">
                    <PostListItem {...items} 
                    onDelete = {() => onDelete (id)}
                    onToggleImportant = {() => onToggleImportant (id)}
                    onToggleLiked = {() => onToggleLiked (id)}/>
                </li>
            )
        }
    })
    return (
        <ListGroup className = "app-list list-group">
            {elements}
        </ListGroup>
    )
}
export default PostList;