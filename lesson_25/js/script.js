"use strict"

/*
Задача №1
Отримати в константу елемент <body>

Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.

Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки

Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/

// const windowWidth = window.innerWidth;
// console.log(windowWidth);

// const windowHight = window.innerHeight;
// console.log(windowHight);



// if(navigator.userAgent.includes("Chrome")) {
// 	console.log("Brauser Chrome");
// } 

// console.log(location.href);

// alert("Hello");

// let question = confirm("Are u ready?");
// console.log(question);
// console.log(typeof question);

// if(question) {
// 	console.log('Nice man');
// } else (console.log('Bad idea'))

// let promptQuestion = prompt('How are u?')

// if(promptQuestion === null) {
// 	console.log('U click cancel');
// 	console.log(Boolean(promptQuestion));
// } else if(promptQuestion) {
// 	console.log('Nice man');
// 	console.log(Boolean(promptQuestion));
// } else (console.log('Dont answer'))


//! Document Object Model (DOM)
// Об'ектна модель документу


//* Навігація по документу
// До тегу html

// const htmlElement = document.documentElement;
// console.log(htmlElement);
// console.log(typeof htmlElement); // object


// До тегу head
// const headElement = document.head;
// console.log(headElement);
// console.log(typeof headElement); // object


// До тегу body
// const bodyElement = document.body;
// console.log(bodyElement);
// console.log(typeof bodyElement); // object


// Перший та останній дочірній елемент
// const bodyElement = document.body;
// const firstChild = bodyElement.firstElementChild;
// console.log(firstChild);
// const lastChild = bodyElement.lastElementChild;
// console.log(lastChild);


// Усі дочірні елементи (Колекція)
// const bodyElement = document.body;
// Колекція дочірніх елементів
// const childNodes = bodyElement.children;
// console.log(childNodes);


// for(let i = 0; i < childNodes.length; ++i){
// 	console.log(childNodes[i]);
// 	console.log(typeof childNodes[i]);
// }


// For ... of метод перебору для колекцій
// for(let childNode of childNodes) {
// 	console.log(childNode);
// }


// Навігація до батьківських та сусідніх елементів
// PREVIOUS
// const bodyElement = document.body;
// const previousElement = bodyElement.previousElementSibling;
// console.log(previousElement);
// NEXT
// const headElement = document.head;
// const nextElement = headElement.nextElementSibling;
// console.log(nextElement);


// !!! Найчастіше використовується !!!
// Пошук та отримання довільного елементу

// (1) Отримання одного першого знайденого об'єкту
// const liElement = document.querySelector('li');
// console.log(liElement);
// if (liElement) {
// 	console.log('First li element');
// }

// (2) Отримання списку (статична колекція) знайдених об'єктів
// const liElements = document.querySelectorAll('li');
// console.log(liElements);
// console.log(Array.isArray(liElements)); // Перевірка на массив -> false
// liElements.forEach((item, index) =>{ // Проте за допомогою forEach можна перебрати масив!
// 	console.log(item);
// 	console.log(index); // ключ ячейки масиву
// });
// Чи щось знайдено? (Перевірка if -> true)
// if (liElements.length) {
// 	console.log('Lets work');
// }
//todo Тоді логічно зробити :
// if (liElements.length) {
// 	liElements.forEach((item, index) =>{ // Проте за допомогою forEach можна перебрати масив!
// 		console.log(item);
// 		console.log(index); // ключ ячейки масиву
// 	});
// }


//? Селектор класів
// !!! Обов'язково використовуємо крапку для імені класу
// const findBlock = document.querySelectorAll(`.example`);
// console.log(findBlock);
// Перевірка чи є такий елемент на сторінці :
// if(findBlock) {
// 	console.log('Yeap');
// }

//? Уточнення пошуку
// const liElements = document.querySelectorAll(`.menu__item.active`);
// if(liElements.length) {
// 	liElements.forEach(liElement => {
// 		console.log(liElement);
// 	});
// }

// Усі об'єкти які мають в назві класу __item
// const liElements = document.querySelectorAll(`[class*=__item]`);
// console.log(liElements);

//? Селектор ID
// const someElement = document.querySelector('#some-id');
// console.log(someElement);

//? Отримання батьківського об'єкту
// const someElement = document.querySelector(".menu__list")
// const parentElement = someElement.parentElement;
// console.log(parentElement);

//! Closest
// (Перевірка наявності батьківського об'єкту)
//! Шукає не тільки батьківський об'єкт, а й перевіряє чи є вказаний селектор у самого об'єкту
// const someElement = document.querySelector('#some-id');
// const parentElement = someElement.closest('main');
// if (parentElement) {
// }
// const liElement = document.querySelector('.menu__item');
// const isClosest = liElement.closest('.header');
// console.log(isClosest);


//* Зміна документу


//? innerHTML - дає змогу отримати те що всередені об'єкту
// !включно з тегами.
// Також дозволяє перезаписувати контент в середені об'єкту

// const listItems = document.querySelectorAll(`.menu__item`);
// console.log(listItems);
// listItems.forEach(listItem => {
// 	listItem.innerHTML = `<span>Hello!</span>`;
// });

//? textContent дає змогу отримати текст всередені об'єкту.
// Також дозволяє перезаписувати текст в середені об'єкту

// let newObject = document.createElement(`div`);
// newObject.innerHTML = `<span>WTF?</span>`
// console.log(newObject);

//? Створення об'єктів

// const wrapper = document.querySelector(`.wrapper`);

// Вставка створеного об'єкту
// Перед
// wrapper.before(newObject);
// Після
// wrapper.after(newObject);
// Всередену на початок
// wrapper.prepend(newObject);
// Всередену в кінець
// wrapper.append(newObject);


//? insertAdjacentHTML

// "beforebegin" – вставити html безпосередньо перед wrapper,
// "afterbegin" – вставити html на початок wrapper,
// "beforeend" – вставити html в кінець wrapper,
// "afterend" – вставити html безпосередньо після wrapper.

// Запис : wrapper.insertAdjacentHTML(`Як будемо вставляти?`, `Що будемо вставляти?`)

// const wrapper = document.querySelector(`.wrapper`);
// wrapper.insertAdjacentHTML(`afterbegin`, `
// <div class="block">
// <div class="block__item">Some text</div>
// </div>
// `);
// console.log(wrapper);

//? insertAdjacentText
// const wrapper = document.querySelector(`.wrapper`);
// wrapper.insertAdjacentText(`afterbegin`, `
// <div class="block">
// <div class="block__item">Some text</div>
// </div>
// `);

//? insertAdjacentTextElement
// Перенесення елементу
// const wrapper = document.querySelector(`.wrapper`);
// let list = document.querySelector('.menu__list');
// wrapper.insertAdjacentElement("beforebegin", list);


//? Клонування елементу
// cloneNode() - клонує сам об'єкт
// coneNode(true) - клонує об'єкт з вмістом

// const wrapper = document.querySelector(`.wrapper`);
// const cloneWrapper = wrapper.cloneNode(true);
// console.log(cloneWrapper);

//? Видалення об'єкту
// const listDel = document.querySelector(`.menu__list`);
// listDel.remove();


//* Стилі та класи
// className classList


//? className - перезапис класу
// const changeClass = document.querySelector(`.menu__list`);
// changeClass.className = `change-class`;
// console.log(changeClass);

//? classList - метод роботи з класами//
// !!! НЕ використовуємо крапку для імені класу
// const list = document.querySelector('.menu__list');
// list.classList.add('list--red'); // - додаємо клас
// list.classList.remove('list--red'); // - видаляємо клас
// list.classList.toggle('active'); // - якщо клас є видаляємо якщо немає додаємо
// list.classList.contains('classname'); // - поверне true якщо клас є
// console.log(list);

// Перевірка классу!
// if (list.classList.contains(`active`)){
// 	console.log("Yes");
// }

//? Управління стилями
// style
// const list = document.querySelector('.menu__list');
// let changePadd =  10 + 40;
// Додати властивість
// list.style.paddingTop = `${changePadd}px`
// Перезапис стілів на вказані
// list.style.cssText = `padding-top :40px; width : 300px;`;

//? Отримання стилю (його значення)
// getComputedStyle

// const link = document.querySelector(`.menu__link`);
// const linkStyle = getComputedStyle(link);
// console.log(linkStyle);
// const linkFontSize = parseFloat(linkStyle.fontSize);
// console.log(linkFontSize);
// if (linkFontSize > 20) {
// 	link.style.fontSize = `10px`;
// }


//* Робота з атрибутами


// const item = document.querySelector('.menu__item');

// Перевіряємо наявність атрибута.
// item.hasAttribute('name');
// Получаємо значення атрибута.
// item.getAttribute('name');
// Установлюємо значення атрибута.
// item.setAttribute('id', 'menu__link--hover');
// Удаляємо атрибут.
// item.removeAttribute('id');
// console.log(item);



//? DATA атирибути
// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
// Краще використовувати parseFloat

// let speed = +item.dataset.speedAnimation;
// console.log(speed); // 3000
// console.log(typeof speed); // string, за допомогою унарного + робимо number
// або парсити через parseFloat
// let speed = parseFloat(item.dataset.speedAnimation);
// item.dataset.speedAnimation = 5000; // зміна умови через js
// console.log(speed);
// console.log(typeof speed);


//* Корисні властивості


//? Отримання імені тегу
// const list = document.querySelector(`.menu__list`);
// console.log(list);
// console.log(list.tagName);

//? Атрибут hidden
// list.hidden = true;
// console.log(list);

//? Розміри та кординати

// Розміри вікна браузера (з полосами прокрутки)
// об'єкт window

// const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;
// console.log(windowWidth);
// console.log(windowHeight);

//? Розміри вікна браузера (без прокрутки)
// об'єкт body
// clientWidth clientHeight

// const someElement = document.body;
// const windowClientWidth = someElement.clientWidth;
// const windowClientHeight = someElement.clientHeight;
// console.log(windowClientWidth);
// console.log(windowClientHeight);


//? Кількість прокручений пікселів
// об'єкт window

// const windowScrollTop = window.scrollY;
// const windowScrollLeft = window.scrollX;
// console.log(windowScrollTop);
// console.log(windowScrollLeft);

// window.scrollTo({ options })
// прокрутка на вказані кординати
// window.scrollTo({
// 	top: 500,
// 	left: 0,
// 	behavior: "smooth" // Safari не працює
// });

//? Проктурка до об'єкту
// elem.scrollIntoView();

// const paragraph = document.querySelector('.paragraph');
// function scrollToBlock(element) {
// 	const block = element.dataset.scroll;
// 	element.scrollIntoView({
// 		"start", "center", "end". За замовчуванням "center".
// 		block: "end",
// 		"start", "center", "end" чи "nearest
// 				". За замовчуванням "nearest".
// 		inline: "nearest",
// 		behavior: "smooth"
// 	});
// }
// scrollToBlock(paragraph);


//? Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (позиція CSS-свойства absolute, relative, fixed чи sticky)
// відносно якого рахується кординати

// const paragraph = document.querySelector('.paragraph');
// const paragraphLeftPos = paragraph.offsetLeft;
// const paragraphTopPos = paragraph.offsetTop;
// console.log(paragraphLeftPos);
// console.log(paragraphTopPos);

//? Кординати відносно вікна браузера
// getBoundingClientRect
// Координати відносно в’юпорта, а не від верху сторінки, як в ofset

// const paragraph = document.querySelector('.paragraph');
// console.log(paragraph.getBoundingClientRect().top);
// console.log(paragraph.getBoundingClientRect().left);

//? Загальні розміри елемента (без зовнішніх відступів)
// offsetWidth и offsetHeight

// const paragraph = document.querySelector('.paragraph');
// console.log(paragraph.offsetWidth);
// console.log(paragraph.offsetHeight);

//? Отримання об'екта по кординатам
// document.elementFromPoint(x, y);

// const elem = document.elementFromPoint(50, 0);
// console.log(elem);


