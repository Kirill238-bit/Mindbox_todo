import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 14px;
    padding:8px;
    //max-width: 500px;

`

export const ButtonsWrap = styled.div`
    display: flex;
    gap:8px;
`

export const Button = styled.button<{active?:boolean}>`
    border: none;
    background-color: white;
    color:grey;
    font-size:14px;
    padding: 3px 8px;
    border-radius: 5px;
    border:${props=> props.active ? '0.5px solid grey' : 'none'};
    &:hover{
        color:blue;
        cursor: pointer;
    }
`
