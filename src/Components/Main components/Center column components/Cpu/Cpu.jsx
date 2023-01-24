import cpuimg from "../../../images/cpu.png";
import { useState, useEffect } from "react";
import Select from "react-select";
import classes from "../components-model-style.css";
import I3 from "./I3";
import I5 from "./I5";
import I7 from "./I7";
import R5 from "./R5";
import R7 from "./R7";

function Cpu({ cpuData }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.value);
  };

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "i3", label: "INTEL CORE i3" },
    { value: "i5", label: "INTEL CORE i5" },
    { value: "i7", label: "INTEL CORE i7" },
    { value: "r5", label: "RYZEN 5" },
    { value: "r7", label: "RYZEN 7" },
  ];

  useEffect(() => {
    if (value === "none") cpuData({ name: "", cost: 0 });
    value === "i3" ? setI3(true) : setI3(false);
    value === "i5" ? setI5(true) : setI5(false);
    value === "i7" ? setI7(true) : setI7(false);
    value === "r5" ? setR5(true) : setR5(false);
    value === "r7" ? setR7(true) : setR7(false);
  }, [value]);

  const [i3, setI3] = useState(false);
  const [i5, setI5] = useState(false);
  const [i7, setI7] = useState(false);
  const [r5, setR5] = useState(false);
  const [r7, setR7] = useState(false);

  return (
    <li className="components" id="cpu">
      <div className="component-name">
        <p>Процессор</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />

          <img src={cpuimg} />
        </section>
      </div>
      <section className="component-model">
        {i3 && <I3 cpuData={cpuData} />}
        {i5 && <I5 cpuData={cpuData} />}
        {i7 && <I7 cpuData={cpuData} />}
        {r5 && <R5 cpuData={cpuData} />}
        {r7 && <R7 cpuData={cpuData} />}
      </section>
    </li>
  );
}

export default Cpu;
