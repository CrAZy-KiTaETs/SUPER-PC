import motherboardimg from "../../../images/motherboard.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import Gigabyte from "./Gigabyte";
import Asus from "./Asus";
import Msi from "./Msi";
import Select from "react-select";

function Motherboard({ motherData }) {
  const [value, setValue] = useState([]);

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "asus", label: "AUSUS" },
    { value: "gigabyte", label: "GIGABYTE" },
    { value: "msi", label: "MSI" },
  ];

  const [asus, setAsus] = useState(false);
  const [gigabyte, setGigabyte] = useState(false);
  const [msi, setMsi] = useState(false);

  useEffect(() => {
    if (value === "none") motherData({ name: "", cost: 0 });
    value === "asus" ? setAsus(true) : setAsus(false);
    value === "gigabyte" ? setGigabyte(true) : setGigabyte(false);
    value === "msi" ? setMsi(true) : setMsi(false);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <li className="components" id="motherboard">
      <div className="component-name">
        <p>Материнская плата</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={motherboardimg} />
        </section>
      </div>
      <section className="component-model">
        {asus && <Asus motherData={motherData} />}
        {gigabyte && <Gigabyte motherData={motherData} />}
        {msi && <Msi motherData={motherData} />}
      </section>
    </li>
  );
}

export default Motherboard;
