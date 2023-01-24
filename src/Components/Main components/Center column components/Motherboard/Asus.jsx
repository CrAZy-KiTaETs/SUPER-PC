import { useEffect, useState } from "react";

const models = [
  { id: "motherboard1", name: "ASUS PRIME B450M", cost: 45900 },
  { id: "motherboard2", name: "ASUS PRIME H510M", cost: 46900 },
  { id: "motherboard3", name: "ASUS PRIME B550M", cost: 52000 },
  { id: "motherboard4", name: "ASUS PRIME X570-PRO", cost: 86990 },
];

function Asus({ motherData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    motherData(info);
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
export default Asus;
