import React, { Component } from 'react';
import { Button } from 'reactstrap';
export default class PostStatusFilter extends Component {

    constructor (props) {
        super (props);
        this.buttons = [
            {name: 'all', text: 'Все'},
            {name: 'like', text: 'Понравились'}
        ]
    }

    render () {
        const buttons = this.buttons.map (({name, text}) => {
            const active = this.props.filter === name;
            const classes = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                key = {name} 
                className = {`btn ${classes}`}
                type="button"
                onClick = {() => this.props.onFilterSelect(name)}>{text}</button>
            )
        })
        return (
            <div className = "btn-group">
               {buttons}
            </div>
        )
    }
   
}