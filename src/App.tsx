import "./App.css";
import Select from "./components/Select";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];

function App() {
  return (
    <div>
      <Select options={options} />
    </div>
  );
}

export default App;
