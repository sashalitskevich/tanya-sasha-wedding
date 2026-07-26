# Wedding site — точная HTML/CSS-версия

В этой версии весь текст — настоящий HTML, а не часть растровой картинки.
Композиция построена на фиксированном холсте 1920 × 6616 px и пропорционально масштабируется на более узких экранах.

## Запуск

```text
npm install
npm run dev
```

Откройте адрес, который покажет Vite, обычно http://localhost:5173/.

## Важно

Графические ассеты сейчас подключены по временным ссылкам Figma. Они работают ограниченное время. Перед публикацией нужно скачать их локально в `src/assets` и заменить URL в `src/main.jsx`.

Шрифт подключён через Google Fonts: Roboto Mono Light, Light Italic и Regular.

## RSVP form
The form in the right half of the RSVP section sends Name, Telegram username and attendance (Да/Нет) to the connected Google Apps Script endpoint.
