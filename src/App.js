import logo from './logo.svg';
import './App.css';

    // One block: bgcolor is a prop, the number is the child
    function Block({ bgcolor, children }) {
      return (
        <div
          className="block"
          style={{ "--bg": bgcolor }}
          onClick={() => alert(children)}
        >
          {children}
        </div>
      );
    }

    function ColorGrid({ colorArray }) {
      return (
        <div className="grid">
          {colorArray.map((c) => (
            <Block key={c.value} bgcolor={c.color}>{c.value}</Block>
          ))}
        </div>
      );
    }

function App() {
  const MyColors = [
      { value: 7, color: "black" },
      { value: 8, color: "blue" },
      { value: 9, color: "red" },
      { value: 4, color: "gold" },
      { value: 5, color: "black" },
      { value: 6, color: "blue" },
      { value: 1, color: "red" },
      { value: 2, color: "gold" },
      { value: 3, color: "black" }
    ];
  return (
    <div className="App">
      <h1>Color Grid</h1>
      <ColorGrid colorArray={MyColors} />
    </div>
  );
}

export default App;
