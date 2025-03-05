import Counter from "./Counter";

function App() {
  let reactCounterLauncher: HTMLDivElement | undefined;

  return (
    <main class="flex flex-row bg-black text-white p-5 gap-5">
      <Counter />
      <div ref={reactCounterLauncher} />
    </main>
  );
}

export default App;
