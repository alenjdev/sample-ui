import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDevice, DoughnutChart, BarChart } from "@formant/ui-sdk";
import { App as FormantApp } from "@formant/data-sdk";

function App() {
  const [count, setCount] = useState(0);
  const [anotations, setAnottaions] = useState([]);
  const [timeStams, setTimeSam] = useState();

  useEffect(() => {
    // queryanoations().then(_ => setAnottaions(_))
    console.log("run");
  }, [count]);

  const queryanoations = async () => {
    return ["one", "two", "one", "two"];
  };

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>Counter</button>
      <button>Second counr</button>
      <DoughnutChart
        height={200}
        width={200}
        labels={["one", "two", "one", "two"]}
        data={anotations}
      />
      <BarChart labels={["one", "two"]} data={[50, 50]} />
    </div>
  );
}

export default App;
