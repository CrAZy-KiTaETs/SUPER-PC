import { useEffect, useState } from "react";

const models = [
  { id: "ram1", name: "8Гб Kingston HyperX Fury 3000МГц", cost: 11000 },
  { id: "ram2", name: "8Гб Kingston HyperX Fury RGB 3000МГц", cost: 13900 },
  { id: "ram3", name: "16Gb Kingston HyperX Fury 3000МГц", cost: 22000 },
  { id: "ram4", name: "16Гб Kingston HyperX Fury RGB 3000МГц", cost: 25000 },
  { id: "ram5", name: "32ГБ Kingston HyperX Fury 3600МГц", cost: 36900 },
];

function Ddr4({ ramData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    ramData(info);
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
export default Ddr4;
