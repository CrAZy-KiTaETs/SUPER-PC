import { useEffect, useState } from "react";

const models = [
  { id: "pu1", name: "1000W Zalman", cost: 39000 },
  { id: "pu2", name: "1000W Gigabyte P1000GM", cost: 44990 },
  { id: "pu3", name: "1000W Be Quiet Straight Power 11", cost: 46900 },
  { id: "pu4", name: "1000W Super Flower Leadex Platinum", cost: 50000 },
  { id: "pu5", name: "1200W CoolerMaster V1200", cost: 56900 },
];

function HightW({ puData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    puData(info);
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
export default HightW;
