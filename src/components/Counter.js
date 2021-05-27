import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}
