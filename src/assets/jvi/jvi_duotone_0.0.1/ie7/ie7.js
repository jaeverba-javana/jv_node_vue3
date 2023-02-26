/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'jvi_\'">' + entity + '</span>' + html;
	}
	var icons = {
		'jvi-square-xmark-classic-duotone': '&#xe900;',
		'jvi-circle-xmark-classic-duotone': '&#xe902;',
		'jvi-ban-classic-duotone': '&#xe904;',
		'jvi-xmark-classic-duotone': '&#xe906;',
		'jvi-info-classic-duotone': '&#xe907;',
		'jvi-circle-info-classic-duotone': '&#xe909;',
		'jvi-messages-classic-duotone': '&#xe90b;',
		'jvi-envelope_classic_duotone': '&#xe90d;',
		'jvi-user_classic_duotone': '&#xe90f;',
		'jvi-paper-plane_classic_duotone': '&#xe911;',
		'jvi-paper-plane-top_classic_duotone': '&#xe913;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/jvi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
