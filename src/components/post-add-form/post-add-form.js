import React, { Component } from 'react';

export default class PostAddForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            text: ''
        }
    }
    onSubmit = (e) => {
        this.setState ({
            text: e.target.value
         })
        
    }

    onAddItem = (e) => {
        e.preventDefault ();
        if (this.state.text === '') {
            console.log ('Пусто');
        } else {
            this.props.addItem (this.state.text);
            this.setState ({text:''})
        }
        
    }
    render () {
        return (
            <form className = "bottom-panel d-flex" onSubmit = {this.onAddItem}>
                <input
                    type = "text"
                    placeholder = "О чем вы сейчас думаете?"
                    className = "form-control new-post-label"
                    onChange = {this.onSubmit}
                    value = {this.state.text}
                />
                <button 
                    type = "submit"
                    className = "btn btn-outline-secondary"
                >Добавить</button>
            </form>
        )
    }
    
 
}