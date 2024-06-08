import { useEffect, useState } from "react";
import { Task } from "./types/task";
import { AppWrapper, Input, InputContainer, Wrapper } from "./styles/main";
import Footer from "./components/Footer";
import TasksList from "./components/TasksList";


const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");
  const [value,setValue] = useState("");
  const tasksLeft = tasks.filter((task) => !task.completed).length;

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);


  const addTask = (task: string) => {
    const newTask: Task = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
    setValue('');
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const toggleTaskCompleted = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filterTasks = (filter: string) => {
    setFilter(filter);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <AppWrapper>
       <h1>todos</h1>
      <Wrapper>
        <InputContainer>
          <button onClick={()=>addTask(value)}>✓</button>
          <Input 
            type="text" 
            value={value} 
            onChange={(e)=> setValue(e.target.value)} 
            placeholder="What needs to be done?" 
            onKeyDown={(e) => { if (e.key === 'Enter') addTask(value)}} 
          />
        </InputContainer>
        <TasksList getFilteredTasks={getFilteredTasks} toggleTaskCompleted={toggleTaskCompleted}/>
        <Footer filter={filter} filterTasks={filterTasks} tasksLeft={tasksLeft} clearCompletedTasks={clearCompletedTasks} />
      </Wrapper>
    </AppWrapper>
  );
};

export default App;
