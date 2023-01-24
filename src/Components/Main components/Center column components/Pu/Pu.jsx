import PU from "../../../images/PU.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import MidW from "./MidW";
import HightW from "./HightW";
import Select from "react-select";

function Pu({ puData }) {
  const [value, setValue] = useState([]);

  const [mw, setMw] = useState(false);
  const [hw, setHw] = useState(false);

  const options = [
    { value: "", label: "Не выбрано" },
    { value: "mw", label: "До 1000W" },
    { value: "hw", label: "1000W+" },
  ];

  useEffect(() => {
    value === "mw" ? setMw(true) : setMw(false);
    value === "hw" ? setHw(true) : setHw(false);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <li className="components" id="pu">
      <div className="component-name">
        <p>Блок питания</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={PU} />
        </section>
      </div>
      <section className="component-model">
        {mw && <MidW puData={puData} />}
        {hw && <HightW puData={puData} />}
      </section>
    </li>
  );
}

export default Pu;
