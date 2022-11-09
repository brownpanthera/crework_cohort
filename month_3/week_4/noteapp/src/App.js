import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import CompletdList from './CompletedList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h2>Taskade</h2>
      <Todo />
      <TodoList />
      <CompletdList />
      </div>
  );
}

export default App;
