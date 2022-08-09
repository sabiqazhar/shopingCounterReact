import { useState } from 'react'
import classnames from 'classnames'

import Navbar from './components/navbar'
import Container from './components/container'
import SearchInput from './components/SearchInput'
import Info from './components/Info'
import Todos from './components/todos'
import Empty from './components/empty'

function App() {
  const [value, setValue] = useState(' ');
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Roti', count: 1},
    {title: 'Selai coklat', count: 1}
  ]);

  const handleSubmit = e =>{
    e.preventDefault();

    if(!value){
      alert('No blank list!');
      return
    }

    const addedTodos = [... todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos);
    setValue(' ');
  }

  const handleAdditionCount = index => {
    const newTodos = [...todos];

    newTodos[index].count += 1;

    setTodos(newTodos);
  }

  const handleSubstractionCount = index =>{
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      newTodos[index].count -= 1;
    } else {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num)=>{
      return total + num.count
    }, 0)

    return totalCounts
  }
  return (
    <>
      <Navbar />

      <Container>

        <SearchInput 
          onSubmit={handleSubmit}
          onChange={e => setValue(e.target.value)}
          value={value}
        />

        <Info 
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}

        />

        {todos.length > 0 ? (
          <Todos 
            todos={todos}
            handleSub={index => {handleSubstractionCount(index)}}
            handleAdd={index => {handleAdditionCount(index)}}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
