(function($) {
	var target = document.querySelector('.shortlink');

	function selection(elem) {
  	var doc  = document,
				elem = doc.querySelector(elem),
				range,
				select;

				select = window.getSelection();
				range  = document.createRange();

				range.selectNodeContents(elem);
				select.removeAllRanges();
				select.addRange(range);
	}

	target.onclick = function() {
		selection('.shortlink__url');
	};
	
})(jQuery);