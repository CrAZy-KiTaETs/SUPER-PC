import { useEffect, useState } from "react";

const models = [
  { id: "cpuColl1", name: "Intel-box", cost: 2000 },
  { id: "cpuColl2", name: "Deepcool GAMMAXX 300 R", cost: 5000 },
  { id: "cpuColl3", name: "AMD Original", cost: 8000 },
  { id: "cpuColl4", name: "SnowMAN", cost: 10000 },
  { id: "cpuColl5", name: "Be Quiet Shadow Rock 3", cost: 15000 },
  { id: "cpuColl6", name: "Be Quiet Dark Rock Pro 4", cost: 22000 },
];

function Cooler_models({ cooler_models }) {
  const [data, setData] = useState([]);
  const [view, setView] = useState({ name: "", cost: "" });

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    cooler_models(info);
  };

  return (
    <form action="">
      {data.map((item, index) => {
        return (
          <div className="models">
            <input
              type="radio"
              name={"r"}
              id={item.id}
              className="lable_inp"
              onChange={() => fn(index)}
            />
            <label htmlFor={item.id} className="first_label">
              <span>{item.name}</span>
              <span className="span_cost">{item.cost} тг.</span>
            </label>
          </div>
        );
      })}
    </form>
  );
}
export default Cooler_models;
