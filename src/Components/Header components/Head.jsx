import { useEffect } from "react";
import { useState } from "react";
import Logo from "../images/Logo.png";
function Head() {
  const [isActive, setIsActive] = useState(false);

  function toggleClass() {
    setIsActive(!isActive);
  }

  function close() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (isActive === true) {
      document.getElementById("ul-container").style.animationName =
        "burger_active";
    } else {
      document.getElementById("ul-container").style.animationName =
        "burger_inactive";
    }
  });

  return (
    <nav>
      <div className="container">
        <button id="logo">
          <img src={Logo} />
        </button>
        <ul id="ul-container">
          <li>
            <a href="">
              <button className="liBtn">Готовые сборки</button>
            </a>
          </li>
          <li>
            <a href="">
              <button className="liBtn">Перефирия</button>
            </a>
          </li>
          <li>
            <a href="">
              <button className="liBtn">Ремонт ПК</button>
            </a>
          </li>
          <li>
            <a href="">
              <button className="liBtn">Мастерская</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="burger-container" onClick={toggleClass}>
        <div className={isActive ? "burger_inactive" : "burger_active"}>
          <span></span>
        </div>
      </div>
      <div
        onClick={close}
        className={isActive ? "burger_opened" : "burger_closed"}
      ></div>
    </nav>
  );
}

export default Head;
