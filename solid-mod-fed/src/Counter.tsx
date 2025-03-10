import { useStore } from "@tanstack/solid-store";
import { styles } from "./Counter.styles";

import store from "./counterStore";

export default function Counter() {
  const count = useStore(store);

  return (
    <div style={styles.counter}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Solid Counter</h1>
      </div>
      <div style={styles.countDisplay}>
        <h1 style={styles.count}>{count()}</h1>
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => store.setState((c) => c + 1)}
          style={styles.incrementButton}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Increment
        </button>
        <button
          onClick={() => store.setState((c) => c - 1)}
          style={styles.decrementButton}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
