import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.scss';
import styled from 'styled-components'
// import style from './App.module.css';
export default class Apps extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data: [
                {label: "Go in the Pavlodar", important: false, like: false, id: 1},
                {label: "Go in the Astana", important: false, like: false, id: 2},
                {label: "Go in the Almaty", important: false, like: false, id: 3},
                {label: "Go in the Vankuver", important: false, like: false, id: 4},
            ],
            term: '',
            filter: 'all',
            AppBlock: styled.div `
                background:#e6f6faf8;
                width: 100%;
                height: 100vh;
            `,
        }
        this.maxId = 5;
    }
    deleteItem = (id) => {
        this.setState (({data}) => {
            const index = data.findIndex (item => item.id === id);
            
            const before = data.slice (0, index);
            const after = data.slice (index +1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }
    onAdd = (item) => {
        const newItem = {
            label: item,
            important: false,
            id: this.maxId++
        }
        this.setState (({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }


    onToggleImportant = (id) => {
        this.setState (({data}) => {
            const index = data.findIndex (elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice (0, index), newItem, ...data.slice (index + 1)]

            return {
                data: newArr
            }
        })
        // this.funcState ({id})
    }

    onToggleLiked = (id) => {
        this.setState (({data}) => {
            const index = data.findIndex (elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice (0, index), newItem, ...data.slice (index + 1)]

            return {
                data: newArr
            }
        })
    }

    filterStatus = (items, filter) => {
        if (filter === 'like') {
            return items.filter (item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState ({term})
    }

    onFilterSelect = (filter) => {
        this.setState ({filter})
    }

    render () {
        const {data, term, filter} = this.state;
        const AppBlock = this.state.AppBlock;
        const liked = data.filter (item => item.like).length;
        const all = data.length;
        const visible = this.filterStatus (this.searchPost (data, term), filter);
        return (
            <AppBlock>
                <div className = "container">
                    <AppHeader
                    liked = {liked}
                    all = {all}
                    />
                    <div className = "search-group d-flex">
                        <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                        <PostStatusFilter 
                            filter = {filter}
                            onFilterSelect = {this.onFilterSelect}
                        />
                    </div>
                    <PostList 
                    posts = {visible} 
                    onDelete = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLiked = {this.onToggleLiked}/>
                    <PostAddForm addItem = {this.onAdd}/>
                </div>
            </AppBlock>
        )
    }
}