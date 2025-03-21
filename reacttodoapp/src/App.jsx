import { useState } from "react";
import './App.css';

function App() {
  const [ toDo, setToDo ] = useState(''); // 얘네가 element가 됨
  const [ toDos, setToDos ] = useState([]); // 얘가 배열인데 ↑

  const onChange = (event) => {
    setToDo(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(toDo === '') {
      return;
    }
    
    //        ↓배열                   ↓element들의 자료형 - string
    setToDos((currentArray) => [toDo, ...currentArray]); // spread 문법
    setToDo(''); // 이상의 조건문이 실행되지 않았다면 버튼 클릭 후에 input창을 비움
  };

  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          onChange={onChange}
          value={toDo}
          placeholder="Type Your To Do 📝" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App
