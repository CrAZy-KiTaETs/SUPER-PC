import { useEffect, useState } from "react";

const models = [
  { id: "hard1", name: "HDD 1 Тб Toshiba", cost: 16900 },
  { id: "hard2", name: "HDD 1 Тб Western Digital", cost: 17499 },
  { id: "hard3", name: "SSD 120 Гб Kingston", cost: 9980 },
  { id: "hard4", name: "SSD 240 Гб Kingston M.2", cost: 13490 },
  { id: "hard5", name: "SSD 480 Гб Kingston M.2", cost: 18990 },
  { id: "hard6", name: "SSD 512 Гб Samsung 970 PRO", cost: 22000 },
  { id: "hard7", name: "SSD 1000 Гб Samsung 970 EVO Plus", cost: 31900 },
];

function Hdd_Ssd({ hardData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    hardData(info);
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
export default Hdd_Ssd;
