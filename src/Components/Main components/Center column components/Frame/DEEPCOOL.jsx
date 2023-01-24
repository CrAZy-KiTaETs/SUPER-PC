import { useEffect, useState } from "react";

const models = [
  { id: "frame1", name: "Deepcool Matrexx 50 ADD-RGB Black", cost: 24690 },
  { id: "frame2", name: "DeepCool EARLKASE RGB", cost: 27890 },
  { id: "frame3", name: "Deepcool Matrexx 70 ADD-RGB 3F Black", cost: 35900 },
];

function DEEPCOOL({ frameData }) {
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
export default DEEPCOOL;
