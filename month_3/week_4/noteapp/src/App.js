import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import TodoCard from './TodoCard';
import ShowTodo from './ShowTodo';
import CompletdList from './CompletedList';

function App() {
  return (
    <div className="App">
      <h2>Taskade</h2>
      <Todo />
      <TodoCard />
      <CompletdList />
      </div>
  );
}

export default App;
