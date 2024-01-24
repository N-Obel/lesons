"use strict"

//========================================================================================================================================================

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

document.addEventListener(`click`, documentAction);

function documentAction(e) {
	const targetElement = e.target;
	if(targetElement.classList.contains('menu__item')){
		targetElement.classList.toggle('active')
	}
}

//========================================================================================================================================================

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener(`load`, pageLoaded);

function pageLoaded() {
	document.body.classList.add(`loaded`);
}

//========================================================================================================================================================

// Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

header.addEventListener(`mouseenter`, changeColor);
header.addEventListener(`mouseleave`, changeColor);

function changeColor(e) {
	if (e.type === `mouseenter`) {
		footer.style.backgroundColor = `yellow`;
	} else if (e.type === `mouseleave`) {
		footer.style.backgroundColor = `#fff`;
	}
}

//========================================================================================================================================================

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const item = document.querySelector(`.block-2__item`);

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.3,
};

function changeValue(e) {
	let start = parseInt(item.dataset.start) || 1;
	const end = parseInt(item.dataset.end) || 10;
	const delay = parseInt(item.dataset.delay); 
	const timer = setInterval(() => {
		e.textContent = start;
		if(start >= end) {
			clearInterval(timer);
		} else {
			start++;
		}
	}, delay);
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			changeValue(entry.target);
			observer.unobserve(entry.target);
		}
	});
});

observer.observe(item);

//========================================================================================================================================================


