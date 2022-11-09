import './App.css';
import Todo from './Todo';
import CompletdList from './CompletedList';
import TodoList from './TodoList';
import TodosState from './context/todos/TodosState';

function App() {
  return (
    <div className="App">
    <TodosState>
      <h2>Taskade</h2>
      <button className='swap-btn'>Swap all</button>
      {/* <Todo /> */}
      <TodoList />
      <CompletdList />
      </TodosState>
      </div>
  );
}

export default App;