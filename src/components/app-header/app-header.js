import React from 'react';
import styled from 'styled-components'

const AppHeader = ({liked, all}) => {
    const HeaderBlock = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 0 20px 0;
        h1 {
            transition: 0.5s;
            color: black;
            cursor: default;
            :hover {
                color:blue;
            }
        }
        
    `
    return (
        <HeaderBlock colored>
            <h1>Saduov Akezhan</h1>
            <h2 className = "app-header-posts">{all} записей, из них понравилось {liked}</h2>
        </HeaderBlock>
    )
}
export default AppHeader;