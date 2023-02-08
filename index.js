const GREENSOCK = 'greensock';
const CSS = 'css';

const selector = 'data-animation-type';
const TYPES = [GREENSOCK, CSS];

const create_style_tag = function (
	element,
	index,
	duration = '1000ms',
	delay = '0ms',
	iteration = '1',
	direction = 'forwards',
	timing = 'linear'
) {
	const style_tag = `
		<style>
			.animate_css_${index} {
				animation-name: animation-${index};
			  animation-duration: ${duration};
			  animation-delay: ${delay};
			  animation-iteration-count: ${iteration};
			  animation-direction: ${direction};
			  animation-timing-function: ${timing};
			}
		</style>
	`;

	document.body.insertAdjacentHTML('afterbegin', style_tag);
};

const animate_css = function (element, index) {
	const from = element.getAttribute('data-from');
	const to = element.getAttribute('data-to');
	if (!from || !to) return;

	element.classList.add('animate_css', 'animate_css_' + index);

	const animation = `
		<style>
			@keyframes animation-${index} {
				from { ${from} }
				to { ${to} }
			}
		</style>
	`;

	document.body.insertAdjacentHTML('afterbegin', animation);
	create_style_tag(element, index);
};

window.onload = function () {
	console.log('test');
	const elements = document.querySelectorAll('[' + selector + ']');

	elements.forEach(function (element, index) {
		const type = TYPES.find((name) => name === element.getAttribute(selector));
		if (type && type === GREENSOCK) return null;
		if (type && type === CSS) animate_css(element, index);
	});
};
