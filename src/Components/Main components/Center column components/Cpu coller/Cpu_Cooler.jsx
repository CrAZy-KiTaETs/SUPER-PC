import cpu from "../../../images/cpu cooler.png";
import { useState, useEffect } from "react";
import Cooler_models from "./Cpu_Cooler_models";
import Select from "react-select";

function Cpu_cooler({ cooler_models }) {
  const [value, setValue] = useState([]);

  const [air, setAir] = useState(false);

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "air_cooling", label: "Воздушное охлаждение" },
  ];

  useEffect(() => {
    value === "none" ? cooler_models({ name: "", cost: 0 }) : null;
    value === "air_cooling" ? setAir(true) : setAir(false);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <li className="components" id="cpu_cooler">
      <div className="component-name">
        <p>Кулер</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={cpu} />
        </section>
      </div>
      <section className="component-model">
        {air && <Cooler_models cooler_models={cooler_models} />}
      </section>
    </li>
  );
}

export default Cpu_cooler;
