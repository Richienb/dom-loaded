/**
Check when the DOM has loaded like [`DOMContentLoaded`](https://developer.mozilla.org/en/docs/Web/Events/DOMContentLoaded). Unlike `DOMContentLoaded`, this also works when included after the DOM was loaded.

The promise resolves when the DOM finishes loading or right away if the DOM has already loaded.

@example
```
import domLoaded = require('dom-loaded');

(async () => {
	await domLoaded;
	console.log('The DOM is now loaded.');
})();
```
*/
declare const domLoaded: Promise<void> & {
	/**
	Synchronously check if the DOM has already finished loading.

	```
	import domLoaded = require('dom-loaded');

	if (domLoaded.hasLoaded) {
		console.log('The DOM has already finished loading.')
	}
	```
	*/
	hasLoaded: boolean;
};

export = domLoaded;
