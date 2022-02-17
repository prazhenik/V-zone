// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// функции конкретного проекта

//прокрутка к топ при обновлении страницы
// window.onbeforeunload = function () {
// 	window.scrollTo(0, 0);
// }

//плавный скролл
// const smoothLinks = document.querySelectorAll('a[href^="#"]:not(._popup-link)');
// const activePopup = document.querySelectorAll('.popup._active');

// if (smoothLinks.length > 0) {
// 	for (let smoothLink of smoothLinks) {
// 		smoothLink.addEventListener('click', function (e) {
// 			e.preventDefault();
// 			const id = smoothLink.getAttribute('href');
// 			document.querySelector(id).scrollIntoView({
// 				behavior: 'smooth',
// 				block: 'start'
// 			});
// 		});
// 	};
// }




//класс ссылке активной страници

// function highlightCurrent() {
// 	const curPage = document.URL;
// 	const links = document.getElementsByTagName('a');
// 	for (let link of links) {
// 		if (link.href == curPage) {
// 			link.classList.add("_activepage");
// 		}
// 	}
// }

// document.onreadystatechange = () => {
// 	if (document.readyState === 'complete') {
// 		highlightCurrent()
// 	}
// };


//preloader
/*window.onload = function () {
	let body = document.querySelector("body");
	let preloader = document.getElementById('preloader');
	body.classList.add("_preloader")
	//body_lock_add();
	preloader.classList.add('_hide-preloader');
	setInterval(function () {
		preloader.classList.add('_preloader-hidden');
		preloader.classList.remove('_hide-preloader');
		body.classList.remove("_preloader")
		//body_lock_remove();
	}, 1000);
}*/

//------------------------------------LazyLoad----------------------------------------------------
// var lazyLoadInstance = new LazyLoad({
// 	// Your custom settings go here
// 	use_native: true
// });


//------------------------------------parallax----------------------------------------------------

// var parallaxScene = document.getElementsByClassName("scene")

// if (parallaxScene.length > 0) {
// 	var scene1 = document.getElementById('');
// 	var parallaxInstance1 = new Parallax(scene1);

// 	var scene2 = document.getElementById('');
// 	var parallaxInstance2 = new Parallax(scene2);
// }

//------------------------------------parallax----------------------------------------------------


//------------------------------------subscribe submenu----------------------------------------------------

// const subscribe = document.querySelector(".subscribe");
// const subscribeIcon = document.querySelector(".subscribe__icon");
// const socials = document.querySelector(".subscribe__socials");
// const overlay = document.querySelector("._overlay");

// if (isMobile.any()) {
// 	function socials_close() {
// 		socials.classList.remove("_show");
// 		subscribeIcon.classList.remove("_active");
// 	}

// 	subscribeIcon.addEventListener("click", function (e) {
// 		if (!subscribeIcon.classList.contains("_active")) {
// 			subscribeIcon.classList.add("_active");
// 			setTimeout(function () {
// 				socials.classList.add("_show")
// 			}, 300);
// 		} else {
// 			socials_close()
// 		}
// 	});

// 	//закрытие при нажатии по єкрану
// 	document.addEventListener("click", function (e) {
// 		if (!e.target.closest(".subscribe__icon")) {
// 			socials_close(e.target.closest('.subscribe'));
// 		}
// 	});
// 	//закрытие при начале скрола
// 	document.addEventListener("scroll", function () {
// 		if (subscribeIcon.classList.contains("_active")) {
// 			socials_close();
// 		}
// 	});
// }


//------------------------------------textarea autosize----------------------------------------------------
//autosize(document.querySelectorAll('textarea'));

// if (!isMobile.any()) {
// 	VanillaTilt.init(document.querySelectorAll(".btn"), {
// 		max: 15,
// 		speed: 300,
// 		glare: true
// 	});
// }

