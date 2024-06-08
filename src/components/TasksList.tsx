import React, { FC } from 'react'
import { Task } from '../types/task'
import { Checkbox, TaskCard, Wrapper } from '../styles/tasks'

type IProps = {
    getFilteredTasks:() => Task[],
    toggleTaskCompleted:(id: number) => void
} 
const TasksList:FC<IProps> = ({getFilteredTasks,toggleTaskCompleted}) => {
  return (
    <Wrapper>
        {getFilteredTasks().map((task) => (
            <TaskCard key={task.id}>
                <Checkbox checked={task.completed} onChange={() => toggleTaskCompleted(task.id)} />
                <span>{task.text}</span>
            </TaskCard>
        ))}
    </Wrapper>
  )
}

export default TasksList