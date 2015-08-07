(function($) {
	var target = document.querySelector('.shortlink');

	function selection(elem) {
		var elem   = document.querySelector(elem);
		var select = window.getSelection();
		var range  = document.createRange();

		range.selectNodeContents(elem);
		select.addRange(range);
	}
	
	target.onclick = function() {
		selection('.shortlink__url');
	};
})(jQuery);