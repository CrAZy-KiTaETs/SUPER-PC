import { useEffect, useState } from "react";

const models = [
  { id: "cpu1", name: "R5 2600", cost: 40000 },
  { id: "cpu2", name: "R5 3600", cost: 50900 },
  { id: "cpu3", name: "R5 5600X", cost: 81690 },
];

function R5({ cpuData }) {
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
export default R5;
