import { useEffect, useState } from "react";

const models = [
  { id: "cpu1", name: "i7-8700K", cost: 75900 },
  { id: "cpu2", name: "i7-10700F", cost: 86990 },
  { id: "cpu3", name: "i7-12700F", cost: 92000 },
];

function I7({ cpuData }) {
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
export default I7;
