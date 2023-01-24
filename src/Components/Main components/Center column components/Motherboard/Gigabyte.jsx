import { useEffect, useState } from "react";

const models = [
  { id: "motherboard1", name: "Gigabyte B450M", cost: 46900 },
  { id: "motherboard2", name: "Gigabyte B550", cost: 48990 },
  { id: "motherboard3", name: "Gigabyte B550 Gaming X", cost: 51900 },
  { id: "motherboard4", name: "Gigabyte X570 AORUS MASTER", cost: 83990 },
];

function Gigabyte({ motherData }) {
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
export default Gigabyte;
