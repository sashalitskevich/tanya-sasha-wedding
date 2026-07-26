import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const A = {
  mainPhoto: 'https://www.figma.com/api/mcp/asset/1c1ebe51-b173-47da-b906-d4dbf98b0ba7',
  rsvpCircles: 'https://www.figma.com/api/mcp/asset/33c885b4-5d81-4cc7-aace-8d9bbefb0575',
  dividerPink: 'https://www.figma.com/api/mcp/asset/c1e2cfb3-7d52-43df-8d88-43b32416654b',
  faqCircles: 'https://www.figma.com/api/mcp/asset/d0061e85-1e72-477a-b810-34c9edf6ea83',
  dividerWhite: 'https://www.figma.com/api/mcp/asset/60795981-3770-45b4-95ea-ed24550188e6',
  dateDots: 'https://www.figma.com/api/mcp/asset/bc3b270b-0206-4afd-89ab-592ed41ac64e',
  dateDecor: 'https://www.figma.com/api/mcp/asset/a4b28985-ac2e-4ab3-a2bf-5cb9d05173c7',
  heroCircles: 'https://www.figma.com/api/mcp/asset/72e6d741-1314-44ea-9698-503bdb303123',
  seeYouCircles: 'https://www.figma.com/api/mcp/asset/26c3c25a-21b0-4dad-882a-4445e070dd50',
  updateCircles: 'https://www.figma.com/api/mcp/asset/2cbd333d-4d3e-481e-a37d-f5edcd3370af',
};

const faq = [
  ['Где пройдёт свадьба?', 'Мы выбрали место за городом, недалеко от Белграда. Организуем трансфер из центра города до места и обратно.'],
  ['Будет ли дресс-код?', 'Да, без строгих правил, но мы бы хотели попросить вас одеться в тёплой гамме, чтобы поддержать общее оформление площадки и красиво сочетаться друг с другом на фото. Погода может нас порадовать, а может и подставить. Так что подготовьте что-то тёплое и защищающее от дождя, в чём вы будете чувствовать себя также празднично и неотразимо.'],
  ['Как добраться до места?', 'Мы организуем трансфер из центра Белграда до ранчо. А вечером с комфортом вернём вас обратно. Если вам не хочется не зависеть от трансфера, без проблем можно приехать на своей машине. На месте будет удобная парковка.'],
  ['Нужно ли подтверждать присутствие?', 'Да, так мы точнее сможем рассчитать количество посадочных мест, еды и напитков, чтобы всем всего хватило. Пожалуйста, отметьте своё решение в форме ниже не позже чем за 1,5 месяца до события.'],
  ['А если остались вопросы?', 'Срочные вопросы пишите нам в телеграм. А ближе к мероприятию мы сделаем чат с нашим свадебным организатором, Аней. Она поможет ответить на все оставшиеся.'],
];

const endDots = [
  ['orange', 832,324],['white',904,383],['white',1860,332],['orange',-43,661],['orange',1235,-33],
  ['orange',650,211],['orange',499,268],['orange',659,476],['orange',461,476],['white',513,383],
  ['white',947,773],['white',773,300],['white',613,236],['orange',638,685],['white',727,476],
  ['white',574,492],['white',712,661],['orange',627,580],['orange',869,841],['orange',787,773],
  ['orange',741,588],['orange',927,540],['white',840,676],['orange',960,716],['orange',1067,620],
  ['white',1040,275],['white',1011,542],['orange',840,516],['orange',601,388],['orange',650,300],
  ['orange',933,318],['orange',787,260],['white',1162,770],['white',159,901],['orange',220,837],
  ['orange',1107,428],['white',1151,416],['white',121,300],['white',-43,-64],['orange',1104,190],
  ['orange',1194,275],['orange',1192,460],['orange',1168,556],['orange',991,460],['orange',778,396],
  ['orange',787,684],['white',1597,668],['orange',1581,126],['orange',1322,1006],['orange',979,620],
  ['orange',485,31],
];

function App() {
  const host = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / 1920);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <main className="viewport" ref={host} style={{ height: 6616 * scale }}>
      <div className="canvas" style={{ transform: `scale(${scale})` }}>
        <section className="section hero" aria-label="Приглашение">
          <img className="hero__photo" src={A.mainPhoto} alt="Саша и Таня" />
          <div className="shade" />
          <img className="hero__circles" src={A.heroCircles} alt="" />
          <div className="hero__text">
            <div className="hero__hello">Привет,<br /><span>   друзья!</span></div>
            <div className="hero__marry"><span>    <em>Мы</em></span><br /><em>женимся!</em></div>
            <div className="hero__invite">И зовём <em>вас это</em><br /><em>      отпраздновать</em></div>
          </div>
        </section>

        <section className="section date" aria-label="Дата и место">
          <img className="date__photo" src={A.mainPhoto} alt="" />
          <div className="shade" />
          <img className="date__dots" src={A.dateDots} alt="" />
          <div className="date__when">Ждём всех<br /><span>     24 октября 2026</span><br /><span>      в 15:00</span></div>
          <div className="date__where">в <span>Белграде</span>, Сербия</div>
          <img className="date__decor" src={A.dateDecor} alt="" />
        </section>

        <section className="section faq">
          <img className="faq__circles" src={A.faqCircles} alt="" />
          <h2 className="faq__title">FAQ</h2>
          <div className="faq__list">
            {faq.map(([q,a]) => (
              <article className="faq__item" key={q}>
                <img src={A.dividerWhite} alt="" className="faq__line" />
                <h3>{q}</h3>
                <p>{a}</p>
              </article>
            ))}
            <img src={A.dividerWhite} alt="" className="faq__line faq__line--last" />
          </div>
        </section>

        <section className="section rsvp">
          <img className="rsvp__circles" src={A.rsvpCircles} alt="" />
          <img className="rsvp__divider" src={A.dividerPink} alt="" />
          <h2 className="rsvp__title"><span className="rsvp__line1">Вы скажете&nbsp;&nbsp;</span><span className="rsvp__line2">нам <b>да</b>?</span></h2>
          <p className="rsvp__description">Заполните, пожалуйста, форму, чтобы мы понимали,<br />сколько нам ожидать гостей. Оставьте свой ник в tg,<br />чтобы потом мы собрали всех в одну группу.</p>
        </section>

        <section className="section update">
          <img className="update__circles" src={A.updateCircles} alt="" />
          <p>Дадим знать, когда <span>здесь появится больше полезной информации</span>. Это будет <span>скоро</span>, возвращайтесь!</p>
        </section>

        <section className="section goodbye">
          <img className="goodbye__circles" src={A.seeYouCircles} alt="" />
          <p>Увидимся!</p>
        </section>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
