import hdd from "../../../images/HDD.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import Select from "react-select";
import Hdd_Ssd from "./Hdd_Ssd";

function Hard_drive({ hardData }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.value);
  };

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "Hard_models", label: "Hdd/Ssd" },
  ];

  useEffect(() => {
    value === "none" ? hardData({ name: "", cost: 0 }) : null;
    value === "Hard_models" ? setHard_models(true) : setHard_models(false);
  }, [value]);

  const [hard_models, setHard_models] = useState(false);

  return (
    <li className="components" id="hard">
      <div className="component-name">
        <p>Накопитель</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={hdd} />
        </section>
      </div>
      <section className="component-model">
        {hard_models && <Hdd_Ssd hardData={hardData} />}
      </section>
    </li>
  );
}

export default Hard_drive;
