// (function (win) {
// 	'use strict';
var win = this;
	var doc = win.document,

		ouya = doc.getElementById('ouya'),

		// Based on: http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/
		VENDOR_PREFIX = (function () {

			var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,

				styleDeclaration = doc.getElementsByTagName('script')[0].style,

				prop;

			for (prop in styleDeclaration) {
				if (regex.test(prop)) {
					return prop.match(regex)[0].toLowerCase();
				}
			}

			// Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
			// However (prop in style) returns the correct value, so we'll have to test for
			// the precence of a specific property
			if ('WebkitOpacity' in styleDeclaration) { return 'webkit'; }
			if ('KhtmlOpacity' in styleDeclaration) { return 'khtml'; }

			return '';
		}()),

		transform = (VENDOR_PREFIX !== '') ? '-' + VENDOR_PREFIX + '-transform' : 'transform';

	doc.getElementsByClassName('display')[0].addEventListener('mousemove', function (event) {
console.log(event.pageX + " - " + transform);
		ouya.style[transform] = 'rotateX(' + (event.pageY / 2) + 'deg) rotateY(' + (event.pageX / 3) + 'deg) translateZ(-100px)';

	});

// }(this));