import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>HomePage</h1>
    </div>
  );
}

export default HomePage;
