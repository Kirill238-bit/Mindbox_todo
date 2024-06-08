import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const TaskCard = styled.div`
    width: 100%;
    height:40px;
    display: flex;
    gap:10px;
    align-items: center;
    border-bottom: 0.5px solid grey;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  appearance: none;
  background-color: transparent;
  border: 2px solid #ccc;

  &:checked {
    border: 2px solid grey;
    &::after {
      content: "✓";
      padding:3px;
      font-size: 16px;
      color: green;
    }
  }

`


