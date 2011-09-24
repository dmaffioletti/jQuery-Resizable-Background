(function($){
	$.fn.resizableBackground= function() {
		var div= $(this);
		var imageWidth= $('img', div).width();
		var imageHeight= $('img', div).height();
		var proportion= imageWidth / imageHeight;

		$(window).resize(resizeBackground);
		resizeBackground();

		function resizeBackground(){
			$(div).css({width: $(window).width() + 'px'});
			$(div).css({height: $(window).height() + 'px'});

			if ($(window).width() / $(window).height() <= proportion) {
				var ratio= $(window).height() / imageHeight;
				var toCrop= ratio * imageWidth - $(window).width();
				$('img', div).css({
					height: $(window).height() + 'px',
					width: ratio * imageWidth + 'px',
					top: '0px',
					left: toCrop / -2 + 'px'
				});
			} else {
				var ratio= $(window).width() / imageWidth;
				var toCrop= ratio * imageHeight - $(window).height();
				$('img', div).css({
					width: $(window).width() + 'px',
					height: ratio * imageHeight + 'px',
					top: toCrop / -2 + 'px',
					left: '0px'
				});
			}
		};
	};
	
	$('#background').resizableBackground();
})(jQuery);