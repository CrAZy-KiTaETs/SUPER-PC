import cooler from "../../../images/cooler.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import RGB from "./RGB";
import Non_RGB from "./Non_RGB";
import Select from "react-select";

function Cooler({ coolerData }) {
  const [value, setValue] = useState([]);

  const [rgb, setRgb] = useState(false);
  const [non_rgb, setNon_rgb] = useState(false);

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "rgb", label: "С RGB подсветкой" },
    { value: "non_rgb", label: "Без RGB подсветки" },
  ];

  useEffect(() => {
    if (value === "none") coolerData({ name: "", cost: 0 });
    value === "rgb" ? setRgb(true) : setRgb(false);
    value === "non_rgb" ? setNon_rgb(true) : setNon_rgb(false);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.value);
    console.log(Select.styles);
  };
  return (
    <li className="components" id="cooler">
      <div className="component-name">
        <p>Корпусные вентиляторы</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={cooler} />
        </section>
      </div>
      <section className="component-model">
        {rgb && <RGB coolerData={coolerData} />}
        {non_rgb && <Non_RGB coolerData={coolerData} />}
      </section>
    </li>
  );
}

export default Cooler;
