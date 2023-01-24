import { useEffect, useState } from "react";

const models = [
  { id: "cpu1", name: "R7 3700X", cost: 86900 },
  { id: "cpu2", name: "R7 3800X", cost: 94000 },
  { id: "cpu3", name: "R7 5800X", cost: 105990 },
];

function R7({ cpuData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    cpuData(info);
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
export default R7;
