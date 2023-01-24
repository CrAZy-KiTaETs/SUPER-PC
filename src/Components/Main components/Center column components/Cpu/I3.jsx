import { useEffect, useState } from "react";

const models = [
  { id: "cpu1", name: "i3-9100F", cost: 34500 },
  { id: "cpu2", name: "i3-10300F", cost: 41990 },
  { id: "cpu3", name: "i3-11400F", cost: 51000 },
];

function I3({ cpuData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    cpuData(info);
    document.getElementsByClassName();
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
            />{" "}
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
export default I3;
