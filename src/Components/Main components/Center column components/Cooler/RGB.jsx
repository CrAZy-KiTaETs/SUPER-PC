import { useEffect, useState } from "react";

const models = [
  { id: "cooler1", name: "ID-COOLING FL-12025K", cost: 3400 },
  { id: "cooler2", name: "CROWN CMCF-14025S-1400", cost: 5600 },
  { id: "cooler3", name: "AeroCool Saturn 12F ARGB 6-pin", cost: 8990 },
];

function RGB({ coolerData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    coolerData(info);
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
export default RGB;
