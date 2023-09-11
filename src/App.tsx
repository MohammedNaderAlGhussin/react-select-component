import { useState } from "react";
import Select from "./components/Select";
import { SelectOption } from "./types/types";
import "./App.css";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [valueM, setValueM] = useState<SelectOption[]>([options[0]]);
  const [valueS, setValueS] = useState<SelectOption | undefined>(options[0]);
  return (
    <div className="App">
      <Select
        multiple
        options={options}
        value={valueM}
        onChange={(o) => setValueM(o)}
      />
      <br />
      <Select options={options} value={valueS} onChange={(o) => setValueS(o)} />
    </div>
  );
}

export default App;
