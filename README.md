# Репозиторий проектной работы № 4-7

## "Проект: Mesto"

**v.4.1**
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
#### Начиная с версии 2.0 (ПР 5):
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
#### Начиная с версии 3.0 (ПР 6):
8. **валидация двух форм ("Редактировать профиль" и "Новое место"):**<br>
а) если введенная информация в полях формы не соответствуют правилам валидации, под каждым полем должно появиться сообщение со стандартной ошибкой; кнопка "Сохранить" неактивна.<br>
б) если введенная информация в полях формы проходит валидацию - ошибка стирается и скрывается; кнопка "Сохранить" снова активна.<br>
в) кнопка "Создать" в форме добавления карточки при открытии всегда неактивна, пока не начнёшь вводить. И после создания карточки тоже деактивируется.<br>
9. **закрытие попапов кликом на оверлей:**<br>
в любом из трёх открытых попапов при клике на оверлей (тёмный фон вне попапа) должно происходить его закрытие.<br>
10. **закрытие попапов нажатием на кнопку Esc:**<br>
в любом из трёх открытых попапов при нажатии на кнопку Esc должно происходить его закрытие.<br>
#### Начиная с версии 4.0 (ПР 7):
11. **внедрение классов:**<br>
функционал остаётся тот же, но работа с карточками места и валидацией форм переносится в 2 отдельных класса.<br>


### Технологии использованы
1. **HTML 5:**<br>
семантические тэги (включая article), модальное окно (**popup**), формы (и поля ввода), доступность (для людей с проблемами зрения), подключение скрипта.<br>
2. **CSS 3:**<br>
flexbox, grid-ы, media queries (3 точки перелома), резиновая вёрстка, позиционирование, реализация эффекта **sticky-footer** (когда подвал прижат к низу страницы, даже если контента не хватает), строки с переполненным контентом заканчиваются многоточием (text-overflow, overflow, white-space), aspect-ratio.<br>
3. **JavaScript (ES 6):**<br>
работа с DOM: querySelector, textContent, обращение к атрибуту через свойство (.value), функции, обработчики событий (addEventListener: по клику и отправке).<br>
**Начиная с версии 2.0:**<br>
template-тэги и клонирование шаблона и вставка в разметку, стрелочные функции, событие слушателя и его контекст, поиск родителя через .closest(), переключение классов через .toggle, работа с массивом (map, forEach), создание объекта.<br>
**Начиная с версии 3.0:**<br>
валидация со стандартными ошибками браузера, использование объекта с настройками, свойства валидности формы и её элементов, обработка событий (input, keyup, mouseup, reset).<br>
**Начиная с версии 4.0:**<br>
модули (во избежание хрупкости кода) и import-export, начало ООП (классы, конструктор класса, приватные поля и методы класса, публичные методы класса, реализация слушателей событий, this и контекст), немножечко JSDoc.<br>
4. **BEM и файловая структура Nested:**<br>
с использованием модификаторов и миксов.
5. **Figma:**<br>
применено выравнивание высоты блока у текстовых элементов (с учётом их line-height) и ширины (по ширине соседних элементов).<br>
Макет для версии 1.0+: [онлайн-макет в Figma - ПР 4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1).<br>
Макет для версии 2.0+: [онлайн-макет в Figma - ПР 5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1).<br>
Макет для версии 3.0+: [онлайн-макет в Figma - ПР 6](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1).<br>



### Авторы
Идея, макет и методические материалы: команда Яндекс.Практикум.<br>
Вёрстка и скрипты: Лара Казакова.

&copy; 2023.
