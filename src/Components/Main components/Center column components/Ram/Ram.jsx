import RAM from "../../../images/RAM.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import Ddr4 from "./Ddr4";
import Select from "react-select";

function Ram({ ramData }) {
  const [value, setValue] = useState();

  const [ddr4, setDdr4] = useState(false);

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "ddr4", label: "DDR4" },
  ];

  useEffect(() => {
    value === "none" ? ramData({ name: "", cost: 0 }) : null;
    value === "ddr4" ? setDdr4(true) : setDdr4(false);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <li className="components" id="RAM">
      <div className="component-name">
        <p>Оперативная память</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={RAM} className="ram" />
        </section>
      </div>
      <section className="component-model">
        {ddr4 && <Ddr4 ramData={ramData} />}
      </section>
    </li>
  );
}

export default Ram;
