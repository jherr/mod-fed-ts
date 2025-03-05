import { useEffect, useRef } from "react";
import counterLauncher from "SolidModFed/CounterLauncher";

import Counter from "./Counter";

function App() {
  const solidCounterRef = useRef(null);

  useEffect(() => {
    if (solidCounterRef.current) {
      counterLauncher(solidCounterRef.current);
    }
  }, []);

  return (
    <div className="flex flex-row bg-black text-white p-5 gap-5">
      <Counter />
      <div ref={solidCounterRef}></div>
    </div>
  );
}

export default App;
