import { useEffect, useState } from "react";
import pc_svg from "../images/configurator-mask.svg";
import help from "../images/help.png";
import info from "../images/info.png";
import menu from "../images/menu.png";

function Right_column({
  cpuCooler,
  cpu,
  motherboard,
  ram,
  gpu,
  pu,
  hard,
  frame,
  cooler,
  setActive,
  setActive2,
  setActive3,
  isActive,
  setIsActive,
}) {
  const [usePrice, setUsePrice] = useState();

  const objPrice = {};

  const [na, setNa] = useState(false);

  const super_mobile = document.getElementsByClassName("super_mobile");
  const total = document.getElementsByClassName("total")[0];

  useEffect(() => {
    objPrice.cpu = cpu.cost;
    objPrice.cpuCooler = cpuCooler.cost;
    objPrice.motherboard = motherboard.cost;
    objPrice.ram = ram.cost;
    objPrice.gpu = gpu.cost;
    objPrice.pu = pu.cost;
    objPrice.hard = hard.cost;
    objPrice.frame = frame.cost;
    objPrice.cooler = cooler.cost;
    const objSum = Object.values(objPrice).reduce(
      (item, index) => item + index,
      0
    );
    setUsePrice(objSum.toLocaleString());
  });

  function open() {
    setActive(true);
    document.body.style.overflow = "hidden";
  }

  function open2() {
    setActive2(true);
    document.body.style.overflow = "hidden";
  }

  function open3() {
    setActive3(true);
    document.body.style.overflow = "hidden";
  }

  function openNav() {
    setIsActive(!isActive);
    total.style.height = "70px";
    for (let i = 0; i < super_mobile.length; i++) {
      super_mobile[i].style.animationName = "ANTIani";
      setNa(false);
    }
  }

  function open_menu() {
    for (let i = 0; i < super_mobile.length; i++) {
      if (na === false) {
        super_mobile[i].style.animationName = "ani ";
        total.style.height = "110%";
        setNa(true);
      } else {
        super_mobile[i].style.animationName = "ANTIani ";
        total.style.height = "70px";
        setNa(false);
      }
    }
  }

  function close_menu() {
    for (let i = 0; i < super_mobile.length; i++) {
      super_mobile[i].style.animationName = "ANTIani ";
    }
    total.style.height = "70px";
    setNa(!na);
  }

  return (
    <section className="total" onClick={close_menu}>
      <div className="fixed-container" onClick={(e) => e.stopPropagation()}>
        <div id="pc_img_conatainer">
          <img src={pc_svg} id="pc_svg" />
        </div>
        <div className="total-grid-conainer">
          <button className="show-accessesories super_mobile" onClick={openNav}>
            <span className={isActive ? "off" : "active"}>
              ПОКАЗАТЬ КОМПЛЕКТУЮЩИЕ
            </span>
            <span className={isActive ? "active" : "off"}>
              СКРЫТЬ КОМПЛЕКТУЮЩИЕ
            </span>
          </button>
          <div id="buyBtn-container">
            <button id="buyBtn" onClick={open}>
              КУПИТЬ
            </button>
          </div>
          <span id="price">{usePrice} тг.</span>
          <button
            className="addictionalyBtn super_mobile"
            id="instruction"
            onClick={open2}
          >
            <span className="addictionalyBtn-text"> ИНСТРУКЦИЯ</span>
            <img src={info} className="mobile-img" />
          </button>
          <button
            className="addictionalyBtn super_mobile"
            id="help"
            onClick={open3}
          >
            <span className="addictionalyBtn-text">ПОМОШЬ</span>
            <img src={help} className="mobile-img" />
          </button>
          <button onClick={open_menu} id="open_menu">
            <img src={menu} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Right_column;
