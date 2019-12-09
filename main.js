document.addEventListener('DOMContentLoaded', () => {
	initTabNav();
	initAccordion();
	initSmoothScroll();
});

function initTabNav() {
	const tabs = document.querySelectorAll('.js-tabs-tracker li');
	const tabContent = document.querySelectorAll('.js-tabcontent-tracker section');

	if (tabs.length && tabContent.length) {
		tabContent[0].classList.add('active');

		function activeTab(index) {
			tabContent.forEach(section => {
				section.classList.remove('active');
			});
			tabContent[index].classList.add('active');
		}

		tabs.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				activeTab(index);
			});
		});
	}
}

function initAccordion() {
	const accordionList = document.querySelectorAll('.js-accordion-tracker dt');

	function activeAccordion() {
		this.classList.toggle('active');
	}

	accordionList.forEach(item => {
		item.addEventListener('click', activeAccordion);
	});
}

function initSmoothScroll() {
	const menuLinks = document.querySelectorAll('.js-menu-tracker a[href^="#"]');

	menuLinks.forEach(link => {
		link.addEventListener('click', scrollToSection);
	});

	function scrollToSection(e) {
		e.preventDefault();

		const href = event.currentTarget.getAttribute('href');
		const target = document.querySelector(href);
		const offsetTop = target.offsetTop;

		smoothScrollTo(0, offsetTop, 800);

		/* forma alternativa, porém ainda não muito bem suportada
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});

		Or... 

		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth'
		}); */
	}

	/* Opção de Scroll-suave compatível com browsers mais antigos */
	function smoothScrollTo(endX, endY, duration) {
		/**
		 * Smooth scroll animation
		 * @param {int} endX: destination x coordinate
		 * @param {int} endY: destination y coordinate
		 * @param {int} duration: animation duration in ms
		 */

		const startX = window.scrollX || window.pageXOffset;
		const startY = window.scrollY || window.pageYOffset;
		const distanceX = endX - startX;
		const distanceY = endY - startY;
		const startTime = new Date().getTime();

		duration = typeof duration !== 'undefined' ? duration : 400;

		// Easing function
		const easeInOutQuart = (time, from, distance, duration) => {
			if ((time /= duration / 2) < 1) return (distance / 2) * time * time * time * time + from;
			return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
		};

		const timer = setInterval(() => {
			const time = new Date().getTime() - startTime;
			const newX = easeInOutQuart(time, startX, distanceX, duration);
			const newY = easeInOutQuart(time, startY, distanceY, duration);
			if (time >= duration) {
				clearInterval(timer);
			}
			window.scroll(newX, newY);
		}, 1000 / 60); // 60 fps
	}
}
