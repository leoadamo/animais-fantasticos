function initTabNav() {
	const tabs = document.querySelectorAll('.js-tabs-tracker li');
	const tabContent = document.querySelectorAll('.js-tabcontent-tracker section');

	if (tabs.length && tabContent.length) {
		tabContent[0].classList.add('ativo');

		function activeTab(index) {
			tabContent.forEach(section => {
				section.classList.remove('ativo');
			});
			tabContent[index].classList.add('ativo');
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
	//this.children[0].classList.toggle('active');
	this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach(item => {
	item.addEventListener('click', activeAccordion);
});
