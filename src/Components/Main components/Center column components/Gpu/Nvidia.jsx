import { useEffect, useState } from "react";

const models = [
  { id: "gpu1", name: "GEFORCE GTX 1650 SUPER 4Гб", cost: 120000 },
  { id: "gpu2", name: "GEFORCE GTX 1660 6Гб", cost: 165000 },
  { id: "gpu3", name: "GEFORCE GTX 1660 SUPER 6Гб", cost: 183990 },
  { id: "gpu4", name: "ASUS RTX 3050 8 Гб ROG STRIX", cost: 200000 },
  { id: "gpu5", name: "GIGABYTE GEFORCE RTX 3060 12Гб GAMING", cost: 230990 },
  { id: "gpu6", name: "ASUS GЕFORCE RTX 3060 TI 8Гб TUF GAMING", cost: 258900 },
  { id: "gpu7", name: "MSI GEFORCE RTX 3070 8Гб VENTUS 3X ОС", cost: 299990 },
  { id: "gpu8", name: "PALIT RTX 3070 TI 8Гб GAMING PRO", cost: 323900 },
  { id: "gpu9", name: "ASUS GEFORCE RTX 3080 STRIX GAMING 10Гб", cost: 385900 },
  {
    id: "gpu10",
    name: "ASUS GEFORCE RTX 3080 Ti STRIX GAMING 12Гб",
    cost: 414000,
  },
  { id: "gpu11", name: "GIGABYTE GEFORCE RTX 4090 24 Гб", cost: 10000000 },
];

function Nvidia({ gpuData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...models]);
  }, []);

  const fn = (id) => {
    const info = data[id];
    gpuData(info);
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
export default Nvidia;
