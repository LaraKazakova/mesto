# Репозиторий проектной работы № 4-5

## "Проект: Mesto"

**v.2.1**
----------

### Обзор
* [Описание](#Описание)
* [Кому может пригодиться](#Кому-может-пригодиться)
* [Технологии использованы](#Технологии-использованы)
* [Авторы](#Авторы)

### Описание
Это учебный проект в рамках курса "Веб-разработчик" от Яндекс.Практикума.<br>
Он представляет собой интерактивный лендинг, демонстрирующий работу с попапом, полями формы, DOM-деревом:
[https://larakazakova.github.io/mesto](https://larakazakova.github.io/mesto)

### Кому может пригодиться
Проект демонстрирует минималистичную адаптивную вёрстку и взаимодействие с документом через JavaScript.<br>
Реализована следующая логика:<br>
1. **редактирование профиля:**<br>
а) клик по кнопке "карандаш" открывает popup-окошко;<br>
б) в popup-е: в 2 поля ввода подставляются значения из заголовка 1-го уровня "имя" и его подзаголовка "профессия";<br>
в) в popup-е: если нажать на кнопку "крестик", то popup-окошко закроется, но данные из полей формы не подставятся в заголовок и подзаголовок;<br>
г) в popup-е: если нажать на кнопку "Сохранить" или Enter, то popup-окошко закроется, и данные из полей формы сохранятся в заголовке и подзаголовке.<br>
#### Начиная с версии 2.0:
2. **добавление нового места:**<br>
а) клик по кнопке "+" открывает popup-окошко;<br>
б) в popup-е: 2 поля ввода принимают "Название" места и "Ссылка на картинку" места;<br>
в) в popup-е: если нажать на кнопку "крестик", то popup-окошко закроется, но карточка не добавится;<br>
г) в popup-е: если нажать на кнопку "Сохранить" или Enter, то popup-окошко закроется, и данные из полей формы сохранятся и подставятся в новую карточку места.<br>
3. **просмотр увеличенной картинки места:**<br>
а) клик по картинке места открывает popup-окошко, где видна картинки и название места;<br>
б) в popup-е: если нажать на кнопку "крестик", то popup-окошко закроется.<br>
4. **лайк на карточке места:**<br>
при клике на иконку "сердечко" - оно становится черным или пустым внутри (если карточку уже лайкнули).<br>
5. **значок корзины на карточке места:**<br>
при клике карточка удаляется безвозвратно.<br>
6. **печать 6 карточек мест из массива.**<br>
7. **плавное открытие и закрытие popup-ов.**


### Технологии использованы
1. **HTML 5:**<br>
семантические тэги (включая article), модальное окно (**popup**), формы (и поля ввода), доступность (для людей с проблемами зрения), подключение скрипта.<br>
2. **CSS 3:**<br>
flexbox, grid-ы, media queries (3 точки перелома), резиновая вёрстка, позиционирование, реализация эффекта **sticky-footer** (когда подвал прижат к низу страницы, даже если контента не хватает), строки с переполненным контентом заканчиваются многоточием (text-overflow, overflow, white-space), aspect-ratio.<br>
3. **JavaScript (ES 6):**<br>
работа с DOM: querySelector, textContent, обращение к атрибуту через свойство (.value), функции, обработчики событий (addEventListener: по клику и отправке).<br>
**Начиная с версии 2.0:**<br>
template-тэги и клонирование шаблона и вставка в разметку, стрелочные функции, событие слушателя и его контекст, поиск родителя через .closest(), переключение классов через .toggle, работа с массивом (map, forEach), создание объекта.<br>
4. **BEM и файловая структура Nested:**<br>
с использованием модификаторов и миксов.
5. **Figma:**<br>
применено выравнивание высоты блока у текстовых элементов (с учётом их line-height) и ширины (по ширине соседних элементов).<br>
Макет для версии 1.0+: [онлайн-макет в Figma - ПР 4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1).<br>
Макет для версии 2.0+: [онлайн-макет в Figma - ПР 5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1).<br>


### Авторы
Идея, макет и методические материалы: команда Яндекс.Практикум.<br>
Вёрстка и скрипты: Лара Казакова.

&copy; 2023.
