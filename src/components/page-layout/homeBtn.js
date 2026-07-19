//style using styled components

import styled from "styled-components";

export const HomeBtn= styled.button`
    color: black;
    background-color: white;
    padding: 10px;  
    border-radius: 5px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    &:hover {
        background-color: #333;
        color: white;
    }
`