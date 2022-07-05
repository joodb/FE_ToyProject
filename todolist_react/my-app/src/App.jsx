import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

/* 추가해야할 기능
1. 입력 후 +버튼을 누르면 input 초기화
2. 입력된 todolist 삭제

*/
function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, inputText]); // 기존 내용 + 새로운 내용
  }

  return (
    <main>
      <input type="text" value={inputText} onChange={ (e) => setInputText(e.target.value)} />
      <button type="button" onClick={addItem}>+</button>

      <TodoBoard todoList={todoList}/>
    </main>
    
  );
}

export default App;