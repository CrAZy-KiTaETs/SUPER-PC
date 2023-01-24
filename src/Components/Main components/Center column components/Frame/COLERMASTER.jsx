import { useEffect, useState } from "react";

const models = [
  { id: "frame1", name: "Cooler Master MasterBox 5 Lite RGB", cost: 20900 },
  { id: "frame2", name: "Cooler Master MasterCase H500", cost: 25900 },
  { id: "frame3", name: "Cooler Master Cosmos C700P", cost: 29900 },
];

function COLERMASTER({ frameData }) {
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
export default COLERMASTER;
