import cpu from "../images/cpu.png";
import cpu_cooler from "../images/cpu cooler.png";
import motherboard from "../images/motherboard.png";
import RAM from "../images/RAM.png";
import GPU from "../images/GPU.png";
import PU from "../images/PU.png";
import HDD from "../images/HDD.png";
import frame from "../images/frame.png";
import cooler from "../images/cooler.png";
import { useEffect } from "react";
import { useState } from "react";

function Left_column(props) {
  const isActive = props.isActive;
  const setIsActive = props.setIsActive;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  const anchors = document.querySelectorAll('a[href*="#"]');

  function close() {
    if (window.innerWidth < 1025) {
      setIsActive(!isActive);
    }
  }

  useEffect(() => {
    const handleWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindow);
    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, []);
  if (width > breakpoint) {
    setIsActive(false);
  }

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <section
      className={
        props.isActive
          ? "selected_accessories_mobile"
          : "selected_accessories_full"
      }
    >
      <ul id="list">
        <li>
          <img src={cpu} className="img_list" />
          <a href="#cpu" onClick={close}>
            <button>Процессор</button>
            <div className="selected_model">{props.cpu.name}</div>
          </a>
        </li>
        <li>
          <img src={cpu_cooler} className="img_list" />
          <a href="#cpu_cooler" onClick={close}>
            <button>Охлаждение</button>
            <div className="selected_model">{props.cpuCooler.name}</div>
          </a>
        </li>
        <li>
          <img src={motherboard} className="img_list" />
          <a href="#motherboard" onClick={close}>
            <button>Материнская плата</button>
            <div className="selected_model">{props.motherboard.name}</div>
          </a>
        </li>
        <li>
          <img src={RAM} className="img_list" id="ram" />
          <a href="#RAM" onClick={close}>
            <button>Оперативная память</button>
            <div className="selected_model">{props.ram.name}</div>
          </a>
        </li>
        <li>
          <img src={GPU} className="img_list" id="gpu" />
          <a href="#GPU" onClick={close}>
            <button>Видеокарта</button>
            <div className="selected_model">{props.gpu.name}</div>
          </a>
        </li>
        <li>
          <img src={PU} className="img_list" />
          <a href="#pu" onClick={close}>
            <button>Блок питания</button>
            <div className="selected_model">{props.pu.name}</div>
          </a>
        </li>
        <li>
          <img src={HDD} className="img_list" />
          <a href="#hard" onClick={close}>
            <button>Накопитель</button>
            <div className="selected_model">{props.hard.name}</div>
          </a>
        </li>
        <li>
          <img src={frame} className="img_list" />
          <a href="#frame" onClick={close}>
            <button>Корпус</button>
            <div className="selected_model">{props.frame.name}</div>
          </a>
        </li>
        <li>
          <img src={cooler} className="img_list" />
          <a href="#cooler" onClick={close}>
            <button>Вентиляторы для корпуса</button>
            <div className="selected_model">{props.cooler.name}</div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Left_column;
