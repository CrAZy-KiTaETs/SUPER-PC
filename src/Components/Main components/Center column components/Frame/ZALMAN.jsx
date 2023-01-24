import { useEffect, useState } from "react";

const models = [
  { id: "frame1", name: "Zalman Z1 Black", cost: 21900 },
  { id: "frame2", name: "Zalman K1", cost: 23900 },
  { id: "frame3", name: "Zalman X3 White", cost: 28000 },
];

function ZALMAN({ frameData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    frameData(info);
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
export default ZALMAN;
