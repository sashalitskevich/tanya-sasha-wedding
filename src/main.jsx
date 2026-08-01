import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import Main from "./assets/Main.webp";
import MainCircles from "./assets/MainCircles.svg";
import Date from "./assets/DateCircles.svg";
import FAQ from "./assets/FAQ.svg";
import RSVP from "./assets/RSVP.svg";
import SeeYou from "./assets/SeeYou.svg";
import Update from "./assets/Update.svg";

const A = {
  mainPhoto: Main,
  rsvpCircles: RSVP,
  dividerPink: 'https://www.figma.com/api/mcp/asset/c1e2cfb3-7d52-43df-8d88-43b32416654b',
  faqCircles: FAQ,
  dividerWhite: 'https://www.figma.com/api/mcp/asset/88aaf998-9651-4d63-9333-2e6875a08db1',
  dateDots: Date,
  dateDecor: 'https://www.figma.com/api/mcp/asset/a4b28985-ac2e-4ab3-a2bf-5cb9d05173c7',
  heroCircles: MainCircles,
  seeYouCircles: SeeYou,
  updateCircles: Update,
};


const M = {
  photo: 'https://www.figma.com/api/mcp/asset/c11f7704-71bb-48ff-bd92-b06bb9483440',
  heroCircles: 'https://www.figma.com/api/mcp/asset/57d8899c-2e75-4191-ad23-a5d7a17ac585',
  dateCircles: 'https://www.figma.com/api/mcp/asset/93bd65bc-90d6-4b4c-95b2-dd05c818c8fa',
  faqCircles: 'https://www.figma.com/api/mcp/asset/c708353d-152b-47eb-8719-e14005ab3b9c',
  divider: 'https://www.figma.com/api/mcp/asset/3971656d-96fb-42b4-805f-4c2f91021c12',
  rsvpCircles: 'https://www.figma.com/api/mcp/asset/daf8fda2-4a82-4138-ae11-f31089baf609',
  seeYou: 'https://www.figma.com/api/mcp/asset/3a9c81f3-a5cb-43cb-9758-3847edf9d935',
  updateCircles: 'https://www.figma.com/api/mcp/asset/df833fd2-893c-44f9-8b86-a92f2c775ae2',
};


function typography(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/(^|[\s«„“(—-])([вксуоиа]) (?=\S)/giu, '$1$2\u00A0');
}

const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyLgxGn-U4pD0E0J3oZhq1poUC5DTACj1h_J5Y3ipPn2Cl6JpdnwtyO0exfFw0FgDahUw/exec';

const faq = [
  ['Где пройдёт свадьба?', 'Мы выбрали место за городом, недалеко от Белграда. Организуем трансфер из центра города до места и обратно.'],
  ['Будет ли дресс-код?', 'Да, без строгих правил, но мы бы хотели попросить вас одеться в тёплой гамме, чтобы поддержать общее оформление площадки и красиво сочетаться друг с другом на фото. Погода может нас порадовать, а может и подставить. Так что подготовьте что-то тёплое и защищающее от дождя, в чём вы будете чувствовать себя также празднично и неотразимо.\n\nИ пожалуйста, не выбирайте наряды белого или молочного цвета — эти цвета зарезервированы невестой)'],
  ['Как добраться до места?', 'Мы организуем трансфер из центра Белграда до ранчо. А вечером с комфортом вернём вас обратно. Если вам не хочется не зависеть от трансфера, без проблем можно приехать на своей машине. На месте будет удобная парковка.'],
  ['Нужно ли подтверждать присутствие?', 'Да, так мы точнее сможем рассчитать количество посадочных мест, еды и напитков, чтобы всем всего хватило. Пожалуйста, отметьте своё решение в форме ниже не позже 1 сентября.'],
  ['Можно ли с детьми?', 'Конечно! Мы позовём на праздник аниматора, который сможет присмотреть за нашими маленькими гостями, чтобы у вас была возможность немного отвлечься. Также можно будет уложить малышей отдохнуть в отдельном домике, если это понадобится, но нам нужно знать об этой необходимости заранее. Пожалуйста, укажите в комментарии, планируете ли быть с детьми и понадобится ли такая опция.'],
  ['Что нам подарить?', 'Мы не собирали вишлист, если захотите нас поздравить, то можете вложиться в наше свадебное путешествие динарами и евро. Цветочное оформление праздника уже продумано, так что не покупайте букеты. Главное — приходите, ведь самый лучший подарок для нас — это вы.'],
  ['А если остались вопросы?', 'Срочные вопросы пишите нам в телеграм. Если у вас есть организационные вопросы или вы готовите для нас сюрприз, можете написать нашему свадебному организатору Ане @annioki. А ближе к мероприятию мы сделаем совместный чат.'],
];


const mobileGoodbyeDots = [
  ['orange', 464, 704.5], ['white', 536, 763.5], ['orange', 282, 591.5], ['orange', 131, 648.5],
  ['orange', 291, 856.5], ['orange', 93, 856.5], ['white', 145, 763.5], ['white', 579, 1153.5],
  ['white', 405, 680.5], ['white', 245, 616.5], ['orange', 270, 1065.5], ['white', 359, 856.5],
  ['white', 206, 872.5], ['white', 344, 1041.5], ['orange', 259, 960.5], ['orange', 501, 1221.5],
  ['orange', 419, 1153.5], ['orange', 373, 968.5], ['orange', 559, 920.5], ['white', 472, 1056.5],
  ['orange', 592, 1096.5], ['orange', 699, 1000.5], ['white', 672, 655.5], ['white', 643, 922.5],
  ['orange', 472, 896.5], ['orange', 233, 768.5], ['orange', 282, 680.5], ['orange', 565, 698.5],
  ['orange', 419, 640.5], ['white', 794, 1150.5], ['orange', 739, 808.5], ['white', 783, 796.5],
  ['orange', 736, 570.5], ['orange', 826, 655.5], ['orange', 824, 840.5], ['orange', 800, 936.5],
  ['orange', 623, 840.5], ['orange', 410, 776.5], ['orange', 419, 1064.5], ['orange', 611, 1000.5],
  ['orange', 336, 326.5],
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
  const [isMobile, setIsMobile] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState('idle');
  const [rsvpError, setRsvpError] = useState('');
  const [submittedAttendance, setSubmittedAttendance] = useState('');

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 767;
      setIsMobile(mobile);
      setScale(window.innerWidth / (mobile ? 1080 : 1920));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  function normalizeTelegram(value) {
    const trimmed = String(value || '').trim();
    if (!trimmed) return '';
    return trimmed.startsWith('@') ? trimmed : `@${trimmed}`;
  }

  function handleTelegramBlur(event) {
    event.currentTarget.value = normalizeTelegram(event.currentTarget.value);
  }

  async function handleRsvpSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      telegram: normalizeTelegram(formData.get('telegram')),
      attendance: String(formData.get('attendance') || '').trim(),
      comment: String(formData.get('comment') || '').trim(),
    };

    if (!payload.name || !payload.telegram || !['Да', 'Нет'].includes(payload.attendance)) {
      setRsvpError('Пожалуйста, заполните все поля');
      return;
    }

    form.elements.telegram.value = payload.telegram;
    setRsvpStatus('submitting');
    setRsvpError('');

    try {
      await fetch(RSVP_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      setSubmittedAttendance(payload.attendance);
      setRsvpStatus('success');
    } catch (error) {
      setRsvpStatus('idle');
      setRsvpError('Не получилось отправить. Попробуйте ещё раз');
    }
  }

  function handleChangeAnswer() {
    setRsvpStatus('idle');
    setRsvpError('');
    setSubmittedAttendance('');
  }

  if (isMobile) {
    return (
      <main className="viewport" ref={host} style={{ height: 12859 * scale }}>
        <div className="mobile-canvas" style={{ transform: `scale(${scale})` }}>
          <section className="m-section m-hero">
            <img className="m-photo" src={M.photo} alt="Саша и Таня" />
            <div className="shade" />
            <img className="m-full" src={M.heroCircles} alt="" />
            <div className="m-hero__text">
              <div className="m-hero__hello">Привет,<br /><span>   друзья!</span></div>
              <div className="m-hero__marry"><span>    <em>Мы</em></span><br /><em>женимся!</em></div>
              <div className="m-hero__invite">   И зовём<br />        <em>вас это</em><br /><em>отпраздновать</em></div>
            </div>
          </section>

          <section className="m-section m-date">
            <img className="m-photo" src={M.photo} alt="" />
            <div className="shade" />
            <img className="m-full" src={M.dateCircles} alt="" />
            <div className="m-date__when">Ждём всех<br /><span>     24 октября<br />  2026</span><br /><span>      в 15:00</span></div>
            <div className="m-date__where">В <span>Белграде</span>,<br />       Сербия</div>
          </section>

          <section className="m-section m-faq">
            <img className="m-full" src={M.faqCircles} alt="" />
            <h2>FAQ</h2>
            <div className="m-faq__list">
              {faq.map(([q,a]) => (
                <article className="m-faq__item" key={q}>
                  <img src={M.divider} alt="" />
                  <h3>{typography(q)}</h3>
                  <p>{typography(a)}</p>
                </article>
              ))}
              </div>
          </section>

          <section className="m-section m-rsvp">
            <img className="m-full" src={M.rsvpCircles} alt="" />
            <h2>Вы скажете<br />     нам <b>да</b>?</h2>
            <p className="m-rsvp__description">{typography('Заполните, пожалуйста, форму, чтобы мы понимали, сколько нам ожидать гостей.')}<br />{typography('Оставьте свой ник в телеграм, чтобы потом мы собрали всех в одну группу.')}</p>
            <div className="m-rsvp__form-shell">
              {rsvpStatus === 'success' ? (
                <div className="rsvp__success" aria-live="polite">
                  <p className="rsvp__success-title">Спасибо!</p>
                  <p className="rsvp__success-text">{submittedAttendance === 'Да' ? 'Мы получили ваш ответ и будем очень рады видеть вас на свадьбе.' : 'Спасибо, что сообщили. Нам очень жаль, что вы не сможете быть с нами.'}</p>
                  <button className="rsvp__change" type="button" onClick={handleChangeAnswer}>Изменить ответ</button>
                </div>
              ) : (
                <form className="rsvp__form" onSubmit={handleRsvpSubmit} noValidate>
                  <fieldset className="rsvp__form-fields" disabled={rsvpStatus === 'submitting'}>
                    <label className="rsvp__field"><span>Имя и фамилия</span><input type="text" name="name" autoComplete="name" required /></label>
                    <label className="rsvp__field"><span>Ник в телеграм</span><input type="text" name="telegram" autoComplete="off" placeholder="Например, @tanya" onBlur={handleTelegramBlur} required /></label>
                    <fieldset className="rsvp__attendance"><legend>Придёте?</legend><label><input type="radio" name="attendance" value="Да" required /><span className="rsvp__radio" />Да</label><label><input type="radio" name="attendance" value="Нет" required /><span className="rsvp__radio" />Нет</label></fieldset>
                    <label className="rsvp__field rsvp__field--comment"><span>Комментарий</span><textarea name="comment" placeholder="необязательное поле" /></label>
                  </fieldset>
                  <button className="rsvp__submit" type="submit" disabled={rsvpStatus === 'submitting'}>{rsvpStatus === 'submitting' ? 'Отправляем…' : 'Отправить'}</button>
                  <p className="rsvp__message" aria-live="polite">{rsvpError}</p>
                </form>
              )}
            </div>
          </section>

          <section className="m-section m-update">
            <img className="m-full" src={M.updateCircles} alt="" />
            <p>{typography('Дадим знать, ')}<span>{typography('когда здесь появится больше полезной информации')}</span>. Это будет <span>скоро</span>, возвращайтесь!</p>
          </section>

          <section className="m-section m-goodbye">
            <img className="m-full" src={M.seeYou} alt="" />
            {mobileGoodbyeDots.map(([color, left, top], index) => (
              <span key={`${color}-${left}-${top}-${index}`} className={`m-goodbye__dot m-goodbye__dot--${color}`} style={{ left, top }} />
            ))}
            <p>Увидимся!</p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="viewport" ref={host} style={{ height: 7158 * scale }}>
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
          <span className="faq__extra-dot" aria-hidden="true" />
          <h2 className="faq__title">FAQ</h2>
          <div className="faq__list">
            {faq.map(([q,a]) => (
              <article className="faq__item" key={q}>
                <img src={A.dividerWhite} alt="" className="faq__line" />
                <h3>{typography(q)}</h3>
                <p>{typography(a)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section rsvp">
          <img className="rsvp__circles" src={A.rsvpCircles} alt="" />
          <img className="rsvp__divider" src={A.dividerPink} alt="" />
          <h2 className="rsvp__title">
            <span className="rsvp__title-line">
              <span>Вы</span>
              <span className="rsvp__tight-space"> </span>
              <span>скажете&nbsp;&nbsp;</span>
            </span>
            <span className="rsvp__title-line rsvp__title-line--second">
              <span className="rsvp__second-indent">&nbsp;&nbsp;&nbsp;&nbsp;</span>нам <b>да</b>?
            </span>
          </h2>
          <p className="rsvp__description">{typography('Заполните, пожалуйста, форму, чтобы мы понимали,')}<br />{typography('сколько нам ожидать гостей. Оставьте свой ник в телеграм, чтобы потом мы собрали всех в одну группу.')}</p>

          <div className="rsvp__form-shell">
            {rsvpStatus === 'success' ? (
              <div className="rsvp__success" aria-live="polite">
                <p className="rsvp__success-title">Спасибо!</p>
                <p className="rsvp__success-text">
                  {submittedAttendance === 'Да'
                    ? 'Мы получили ваш ответ и будем очень рады видеть вас на свадьбе.'
                    : 'Спасибо, что сообщили. Нам очень жаль, что вы не сможете быть с нами.'}
                </p>
                <button className="rsvp__change" type="button" onClick={handleChangeAnswer}>Изменить ответ</button>
              </div>
            ) : (
              <form className="rsvp__form" onSubmit={handleRsvpSubmit} noValidate>
                <fieldset className="rsvp__form-fields" disabled={rsvpStatus === 'submitting'}>
                  <label className="rsvp__field">
                    <span>Имя и фамилия</span>
                    <input type="text" name="name" autoComplete="name" required />
                  </label>

                  <label className="rsvp__field">
                    <span>Ник в телеграм</span>
                    <input type="text" name="telegram" inputMode="text" autoComplete="off" placeholder="Например, @tanya" onBlur={handleTelegramBlur} required />
                  </label>

                  <fieldset className="rsvp__attendance">
                    <legend>Придёте?</legend>
                    <label><input type="radio" name="attendance" value="Да" required /><span className="rsvp__radio" />Да</label>
                    <label><input type="radio" name="attendance" value="Нет" required /><span className="rsvp__radio" />Нет</label>
                  </fieldset>

                  <label className="rsvp__field rsvp__field--comment">
                    <span>Комментарий</span>
                    <textarea name="comment" placeholder="необязательное поле" />
                  </label>
                </fieldset>

                <button className="rsvp__submit" type="submit" disabled={rsvpStatus === 'submitting'}>
                  {rsvpStatus === 'submitting' ? 'Отправляем…' : 'Отправить'}
                </button>

                <p className="rsvp__message" aria-live="polite">{rsvpError}</p>
              </form>
            )}
          </div>
        </section>

        <section className="section update">
          <img className="update__circles" src={A.updateCircles} alt="" />
          <p>{typography('Дадим знать, когда ')}<span>{typography('здесь появится больше полезной информации')}</span>. Это будет <span>скоро</span>, возвращайтесь!</p>
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
