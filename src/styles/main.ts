import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:500px;
    border:0.5px solid grey;
    overflow: hidden;

    @media (max-width:768px) {
        width:95vw;
    }
`

export const InputContainer = styled.div`
    display: flex;
    gap: 20px;
    width:100%;
    border:0.5px solid grey;
    button{
        color:grey;
        border:none;
        background-color: white;
        cursor: pointer;
        font-size: 20px;
    }
`

export const Input = styled.input`
    width: 100%;
    height:40px;
    font-size: 18px;
    border: none;
    color:rgb(134 199 185);
`