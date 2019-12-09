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
initTabNav();

const accordionList = document.querySelectorAll('.js-accordion-tracker dt');

function activeAccordion() {
	this.classList.toggle('active');
	this.nextElementSibling.classList.toggle('active');
}

accordionList.forEach(item => {
	item.addEventListener('click', activeAccordion);
});

const menuLinks = document.querySelectorAll('.js-menu-tracker a[href^="#"]');

function scrollToSection(e) {
	e.preventDefault();

	const href = event.currentTarget.getAttribute('href');
	const target = document.querySelector(href);

	target.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});

	/* forma alternativa, porém ainda não muito bem suportada
	const offsetTop = target.offsetTop;
	window.scrollTo({
		top: offsetTop,
		behavior: 'smooth'
	}); */
}

menuLinks.forEach(link => {
	link.addEventListener('click', scrollToSection);
});
