const GREENSOCK = 'greensock';
const CSS = 'css';

const selector = 'data-animation-type';
const TYPES = [GREENSOCK, CSS];

const create_style_tag = function (element, index, options) {
	const { duration, delay, iteration, direction, timing } = options;
	const style_tag = `
		<style>
			.animate_css_${index} {
				-webkit-animation-name: animation-${index};
			  -webkit-animation-duration: ${duration};
			  -webkit-animation-delay: ${delay};
			  -webkit-animation-iteration-count: ${iteration};
			  -webkit-animation-direction: ${direction};
			  -webkit-animation-timing-function: ${timing};
			  -webkit-animation-fill-mode: forwards;
				animation-name: animation-${index};
			  animation-duration: ${duration};
			  animation-delay: ${delay};
			  animation-iteration-count: ${iteration};
			  animation-direction: ${direction};
			  animation-timing-function: ${timing};
			  animation-fill-mode: forwards;
			}
		</style>
	`;

	document.body.insertAdjacentHTML('afterbegin', style_tag);
};

const has_style_attribute = function (element, style_attribute) {
	const computed_style = window.getComputedStyle(element);
	if (computed_style.position === 'absolute' || computed_style.position === 'relative') return true;
	return false;
};

const animate_css = function (element, index) {
	const from = element.getAttribute('data-from');
	const to = element.getAttribute('data-to');
	const duration = element.getAttribute('data-duration');
	const delay = element.getAttribute('data-delay');
	const iteration = element.getAttribute('data-iteration');
	const direction = element.getAttribute('data-direction');
	const timing = element.getAttribute('data-timing');

	if (!from || !to) return;

	const options = {
		duration: '1000ms',
		delay: '0ms',
		iteration: '1',
		direction: 'normal',
		timing: 'linear',
	};

	if (duration) options.duration = duration;
	if (delay) options.delay = delay;
	if (iteration) options.iteration = iteration;
	if (direction) options.direction = direction;
	if (timing) options.timing = timing;

	element.classList.add('animate_css', 'animate_css_' + index);
	if (!has_style_attribute(element, 'position')) element.style.position = 'relative';

	const animation = `
		<style>
			@-webkit-keyframes animation-${index} {
				from { ${from} }
				to { ${to} }
			}
			@keyframes animation-${index} {
				from { ${from} }
				to { ${to} }
			}
		</style>
	`;

	document.body.insertAdjacentHTML('afterbegin', animation);
	create_style_tag(element, index, options);
};

window.onload = function () {
	const elements = document.querySelectorAll('[' + selector + ']');

	elements.forEach(function (element, index) {
		const type = TYPES.find((name) => name === element.getAttribute(selector));
		if (type && type === GREENSOCK) return null;
		if (type && type === CSS) animate_css(element, index);
	});
};
