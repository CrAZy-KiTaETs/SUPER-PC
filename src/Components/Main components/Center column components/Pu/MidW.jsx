import { useEffect, useState } from "react";

const models = [
  { id: "pu1", name: "500W Zalman", cost: 19900 },
  { id: "pu2", name: "500W be quiet!", cost: 22990 },
  { id: "pu3", name: "650W Seasonic Platinum FanLess", cost: 25999 },
  { id: "pu4", name: "750W Corsair CX750", cost: 33000 },
  { id: "pu5", name: "850W ASUS ROG-THOR-850P", cost: 42900 },
];

function MidW({ puData }) {
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
export default MidW;
