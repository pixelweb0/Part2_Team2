
import { useState, useRef } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count); // count 저장용 

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    countRef.current = newCount;  // Ref 값 저장!

    setTimeout(() => {
      alert(`최신 카운트: ${countRef.current}`); // 값 출력
    }, 3000);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default Count;
