import React, { FC } from 'react'
import { Button, ButtonsWrap, Wrapper } from '../styles/footer'

type IProps = {
    filterTasks:(filter: string) => void,
    tasksLeft:number
    clearCompletedTasks:() => void
    filter:string
}

const Footer:FC<IProps> = ({filterTasks,tasksLeft,clearCompletedTasks,filter }) => {
  return (
    <Wrapper>
        <span>{tasksLeft} {tasksLeft === 1 ? 'item' : 'items'} left</span>
        <ButtonsWrap>
            <Button active={filter === 'all'} onClick={() => filterTasks("all")}>All</Button>
            <Button active={filter === 'active'} onClick={() => filterTasks("active")}>Active</Button>
            <Button active={filter === 'completed'} onClick={() => filterTasks("completed")}>Completed</Button>
        </ButtonsWrap>
        <Button onClick={clearCompletedTasks}>Clear completed</Button>
    </Wrapper>
  )
}

export default Footer