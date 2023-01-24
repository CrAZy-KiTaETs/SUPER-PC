import { useEffect, useState } from "react";

const models = [
  { id: "cooler1", name: "AeroCool Cosmo 12", cost: 2900 },
  { id: "cooler2", name: "AeroCool Saturn 12F", cost: 3200 },
  { id: "cooler3", name: "ID-COOLING ZF-12025-TRIO-SNOW", cost: 4900 },
];

function Non_RGB({ coolerData }) {
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
export default Non_RGB;
