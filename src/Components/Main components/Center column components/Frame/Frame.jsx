import frame from "../../../images/frame.png";
import { useState, useEffect } from "react";
import classes from "../components-model-style.css";
import DEEPCOOL from "./DEEPCOOL";
import CORSAIR from "./CORSAIR";
import AEROCOOL from "./AEROCOOL";
import ZALMAN from "./ZALMAN";
import COLERMASTER from "./COLERMASTER";
import Select from "react-select";

function Frame({ frameData }) {
  const [value, setValue] = useState([]);

  const [deepcool, setDeepcool] = useState(false);
  const [corsair, setCorsair] = useState(false);
  const [aerocool, setAerocool] = useState(false);
  const [zalman, setZalman] = useState(false);
  const [colermaster, setColermaster] = useState(false);

  const options = [
    { value: "none", label: "Не выбрано" },
    { value: "deepcool", label: "deepcool" },
    { value: "corsair", label: "corsair" },
    { value: "aerocool", label: "aerocool" },
    { value: "zalman", label: "zalman" },
    { value: "colermaster", label: "colermaster" },
  ];

  useEffect(() => {
    if (value === "none") frameData({ name: "", cost: 0 });
    value === "deepcool" ? setDeepcool(true) : setDeepcool(false);
    value === "corsair" ? setCorsair(true) : setCorsair(false);
    value === "aerocool" ? setAerocool(true) : setAerocool(false);
    value === "zalman" ? setZalman(true) : setZalman(false);
    value === "colermaster" ? setColermaster(true) : setColermaster(false);
  }, [value]);
  const handleChange = (e) => {
    setValue(e.value);
  };

  return (
    <li className="components" id="frame">
      <div className="component-name">
        <p>Корпус</p>
        <section>
          <Select
            classNamePrefix="Custom-select"
            placeholder="Выберите модель"
            value={options.filter((obj) => obj.value === value)}
            onChange={handleChange}
            options={options}
            isSearchable={false}
          />
          <img src={frame} />
        </section>
      </div>
      <section className="component-model">
        {deepcool && <DEEPCOOL frameData={frameData} />}
        {corsair && <CORSAIR frameData={frameData} />}
        {aerocool && <AEROCOOL frameData={frameData} />}
        {zalman && <ZALMAN frameData={frameData} />}
        {colermaster && <COLERMASTER frameData={frameData} />}
      </section>
    </li>
  );
}

export default Frame;
