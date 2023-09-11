import { useState } from "react";
import "./App.css";
import Select from "./components/Select";
import { SelectOption } from "./types/types";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];

function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  return (
    <div>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </div>
  );
}

export default App;
