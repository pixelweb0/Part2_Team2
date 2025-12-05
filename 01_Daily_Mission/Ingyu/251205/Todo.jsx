import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(), // 고유 ID 생성 (timestamp)
      text,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText(""); // 입력창 초기화
  };

  return (
    <div>
      <h2>Todo 리스트</h2>

      <form onSubmit={handleSubmit}>
        <input 
          value={text} 
          onChange={(e)=>setText(e.target.value)} 
          placeholder="할 일을 입력하세요"
        />
        <button>추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
