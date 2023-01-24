function Footer() {
  return (
    <footer>
      <div className="container">
        <div id="footer-left">
          <div id="footer-left-container">
            <div id="date">
              <p>Режимы работы</p>
              <p> Пн-Пт: 11:00 - 20:00 </p>
              <p> Сб-Вс: 12:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div id="footer-center">
          <a href="">
            <button className="liBtn">Готовые сборки</button>
          </a>
          <a href="">
            <button className="liBtn">Перефирия</button>
          </a>
          <a href="">
            <button className="liBtn">Ремонт ПК</button>
          </a>
          <a href="">
            <button className="liBtn">Мастерская</button>
          </a>
        </div>
        <div id="footer-right">
          <h2>Наши партнеры</h2>
          <div id="partners">
            <img
              src="	https://edelws.ru/upload/uf/3c2/3c28ddf1e910fe3e061998941dc6d063.svg"
              className="partners-log"
            />
            <img
              src="https://edelws.ru/upload/uf/e3c/e3c514fa76c9cd099dbd9e90032990cf.svg"
              className="partners-log"
            />
            <img
              src="	https://edelws.ru/upload/uf/462/462ce9801310ccefb151e0706542087a.svg"
              className="partners-log"
            />
            <img
              src="	https://edelws.ru/upload/uf/dc2/dc28bcacc7a63c2801ffdcfdbf7e6921.svg"
              className="partners-log"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
