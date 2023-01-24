import { useEffect, useState } from "react";

const models = [
  { id: "cpu1", name: "i5-10400F", cost: 42900 },
  { id: "cpu2", name: "i5-10600KF", cost: 49990 },
  { id: "cpu3", name: "i5-11400F", cost: 56000 },
];

function I5({ cpuData }) {
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
export default I5;
