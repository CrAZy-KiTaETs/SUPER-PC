import { useEffect, useState } from "react";

const models = [
  {
    id: "frame1",
    name: "Corsair Carbide Series Spec-Delta RGB Black",
    cost: 16900,
  },
  { id: "frame2", name: "Corsair Carbide Spec-Omega RGB", cost: 17499 },
  { id: "frame3", name: "Corsair Cristal 570X RGB", cost: 22900 },
];

function CORSAIR({ frameData }) {
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
export default CORSAIR;
