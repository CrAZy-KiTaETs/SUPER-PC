import "./Botom_style.css";
import step1 from "../../images/1step.png";
import step2 from "../../images/2step.png";
import step3 from "../../images/3step-2.png";
import step4 from "../../images/4step.png";
import step5 from "../../images/5step.png";
function Bottom_column() {
  return (
    <article class="assembly_steps">
      <div>
        <h2 className="our_clients">Нашим клиентам</h2>
      <div id="gridDiv">
        <section className="assembly_diagram">
          <h2>1 - Профессиональная сборка ПК</h2>
          <p>
            Качественная сборка компьютеров и индивидуальная настройка от
            инженеров компании SUPER PC. Моддинг полная кастомизация системных
            блоков. Кабель менеджмент, персонификация ПК
          </p>
          
          <img src={step1} className="steps_img" />
        </section>
        <section className="assembly_diagram">
            <h2>2 - Установка програм</h2>
          <p>
            При заказе ПК с операционной системой, устанавливается Windows 10 с
            полным пакетом обновлений, последние версии драйверов и сервиспаков.
            Производится процедура обновления биос системы до последней
            доступной версии
          </p>
          <img src={step2} className="steps_img" />
        </section>
        <section className="assembly_diagram" id="e">
          <div><h2>
            5 - Вам остается только подключить компьютер к питанию и монитору.
            Приятного вам отдыха!
          </h2>
          <p>Команда SUPER PC</p></div>
          
          <img src={step5} className="steps_img" id="step5" />
        </section>
        <section className="assembly_diagram">
          <h2>3 - Стресс-тест компьютеров</h2>
          <p>
            Готовые ПК тестируют специализированным программным обеспечением при
            максимальной нагрузке в течение 4-х часов. С запуском самых
            современных игровых проектов класс AAA
          </p>
          <img src={step3} className="steps_img" id="step3" />
        </section>
        <section className="assembly_diagram">
          <h2>4 - Доставка готовых пк</h2>
          <p>
            Доставка по всей территории галактики нашим партнером компанией
            "Млечный путь Аэирлайнс". Груз страхуется на полную стоимость. По
            Казахстану бесплатно, собственной логистической службой
          </p>
          <img src={step4} className="steps_img" id="step4" />
        </section>
      </div></div>
      
      <section id="sertificat_info">
          <h2 className="our_clients"><span>Важно!</span>  Сборка компьютера бесплатная.</h2>
          <p>
            Конфигуратор ПК — легкий способ собрать компьютер онлайн с проверкой
            физической совместимости комплектующих. Начнем комплектовать.
            Добавляем первый элемент - центральный процессор (CPU). При выборе
            компонентов происходит визуализация внешнего вида устанавливаемых
            узлов. Цена рассчитывается автоматически в онлайн режиме,
            последовательно формируя стоимость готового ПК. Программа
            конструктор за пару кликов помогает собрать и купить системный блок
            с нуля, присваивает идентификационный номер сборки, сохраняет
            ссылку. При необходимости распечатает сохраненную конфигурацию. Есть
            опция узнать мнение эксперта, воспользовавшись формой обратной
            связи.
          </p>
      </section>
      {/* <a href="https://www.flaticon.com/ru/free-icons/" title=" иконки"> иконки от Smashicons - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/ru/free-icons/" title="Перевозка иконки">Перевозка иконки от Muhammad Ali - Flaticon</a> */}
      {/* ИКОНКИ!!!
      https://www.flaticon.com/ru/packs/gaming-pc-3?word=компьютер&style_id=159&family_id=12&group_id=159 */}
    </article>
  );
}
export default Bottom_column;
