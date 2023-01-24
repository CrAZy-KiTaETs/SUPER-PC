import { useEffect, useState } from "react";

const models = [
  { id: "motherboard1", name: "MSI B550M PRO-VDH WIFI", cost: 44900 },
  { id: "motherboard2", name: "MSI MAG B550M BAZOOKA", cost: 47900 },
  { id: "motherboard3", name: "MSI MPG X570 GAMING PLUS", cost: 55000 },
  { id: "motherboard4", name: "MSI X570 A-PRO", cost: 90090 },
];

function Msi({ motherData }) {
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
export default Msi;
