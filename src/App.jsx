import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function App() {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => { 
    dispatch(addTodo({text}))
    setText('')
  };

  // const addTodo = () => {
  //   if(text.trim().length) {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: new Date().toISOString(),
  //       text,
  //       completed: false
  //     }
  //   ])
  //   setText('')
  // }
  // }

  // const toggleTodoComplete = (todoId) => {
  //   setTodos(
  //     todos.map(
  //       todo => {
  //         if (todo.id !== todoId) return todo;
  //         return {
  //           ...todo,
  //           completed: !todo.completed
  //         }
  //       }
  //     )
  //   )
  // }

  // const removeTodo = (todoId) => {
  //   setTodos(todos.filter(todo => todo.id !== todoId))
  // }

  return (
    <div className="App">
      <InputField 
        text={text} 
        handleInput={setText} 
        handleSubmit={addTask} 
      />

      <TodoList />
    </div>
  );
}

export default App;
