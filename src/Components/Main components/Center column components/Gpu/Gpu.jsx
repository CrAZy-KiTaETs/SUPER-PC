import GPU from "../../../images/GPU.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import Nvidia from "./Nvidia";
import Amd from "./AMD";
import Select from "react-select";

function Gpu({ gpuData }) {
  const [value, setValue] = useState([]);

  const [nvidia, setNvidia] = useState(false);
  const [amd, setAmd] = useState(false);

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "nvidia", label: "Nvidia" },
    { value: "amd", label: "AMD" },
  ];

  useEffect(() => {
    if (value === "none") gpuData({ name: "", cost: 0 });
    value === "nvidia" ? setNvidia(true) : setNvidia(false);
    value === "amd" ? setAmd(true) : setAmd(false);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <li className="components" id="GPU">
      <div className="component-name">
        <p>Видеокарта</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={GPU} className="gpu" />
        </section>
      </div>
      <section className="component-model">
        {nvidia && <Nvidia gpuData={gpuData} />}
        {amd && <Amd gpuData={gpuData} />}
      </section>
    </li>
  );
}

export default Gpu;
