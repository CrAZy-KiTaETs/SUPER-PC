import "./App.css";
import classes from "./Components/Style.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Popup from "./Components/UI/Popup";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const [ff, setff] = useState({ name: "", number: "", email: "", text: "" });

  function close() {
    setActive(false);
    setActive2(false);
    setActive3(false);
    document.body.style.overflow = "visible";
    setff({ name: "", number: "", email: "", text: "" });
  }

  return (
    <div className="App">
      <Popup active={active} setActive={setActive}>
        <h2>Результат</h2>
        <p>Ваш товар был успешно добавлен в корзину</p>
        <button className="deleteBtn" onClick={close}>
          X
        </button>
        <div>
          <button className="basketBtn">В корзину</button>
          <button className="closeBtn" onClick={close}>
            Закрыть окно
          </button>
        </div>
      </Popup>
      <Popup active={active2} setActive={setActive2}>
        <p>
          Наши специалисты предлагают начать сборку системного блок с выбора CPU
          (Процессора). Так же рекомендуется внимательно смотреть на выбраное
          вами комплектующее так как оно может не подойти ибо я не захотел
          реализовывать функционал при котором показываются только совместимые
          комплектующие. По всем другим вопросам можете позвонить мне
          +7-(707)-382-40-47 Косаев Алим
        </p>

        <button className="deleteBtn" onClick={close}>
          X
        </button>
      </Popup>
      <Popup active={active3} setActive={setActive3}>
        <h2>Написать сообщение</h2>
        <p>
          Мы с радостью поможем Вам с выбором компьютера и ответим на все
          интересующие вопросы! Перезвоним Вам в течении 10 минут.
        </p>
        <button className="deleteBtn" onClick={close}>
          X
        </button>
        <div className="inp-container">
          <input
            type="text"
            id="inp_text"
            placeholder="Ваше полное имя"
            value={ff.name}
            onChange={(e) => setff({ ...ff, name: e.target.value })}
          />
          <input
            type="number"
            id="inp_num"
            placeholder="Телефон"
            value={ff.number}
            onChange={(e) => setff({ ...ff, number: e.target.value })}
          />
          <input
            type="email"
            id="inp_email"
            placeholder="E-mail"
            value={ff.email}
            onChange={(e) => setff({ ...ff, email: e.target.value })}
          />
          <textarea
            id="textarea"
            placeholder="Сообщение"
            value={ff.text}
            onChange={(e) => setff({ ...ff, text: e.target.value })}
          />
        </div>
        <button className="closeBtn" onClick={close}>
          Отправить
        </button>
      </Popup>
      <Header />
      <Main
        setActive={setActive}
        setActive2={setActive2}
        setActive3={setActive3}
      />
      <Footer />
    </div>
  );
}

export default App;
