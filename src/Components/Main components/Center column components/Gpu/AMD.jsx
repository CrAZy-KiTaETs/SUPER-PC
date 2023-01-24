import { useEffect, useState } from "react";

const models = [
  { id: "gpu1", name: "PowerColor AMD Radeon RX", cost: 112000 },
  { id: "gpu2", name: "GIGABYTE Radeon RX 6600 XT", cost: 135000 },
  { id: "gpu3", name: "Sapphire AMD Radeon RX 6700", cost: 153990 },
  { id: "gpu4", name: "ASRock Radeon RX 6700XT", cost: 180000 },
  { id: "gpu5", name: "MSI Radeon RX 6700 XT MECH", cost: 200990 },
  { id: "gpu6", name: "PowerColor Red Dragon RX 6800", cost: 248900 },
  { id: "gpu7", name: "GIGABYTE Radeon RX 6700 XT", cost: 289990 },
  { id: "gpu8", name: "PowerColor Radeon RX 6900 XT", cost: 323900 },
];

function AMD({ gpuData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    gpuData(info);
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
export default AMD;
