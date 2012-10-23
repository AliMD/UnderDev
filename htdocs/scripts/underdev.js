// Zepto/jQuery fadeLoop plugin for fade slide show effects by ali.md

(function($){
	var ease = !!window.Zepto ? 'ease-out' : 'swing';
	$.extend($.fn,{
		fadeLoop :function(options){

			options=$.extend({
				duration : 2500,
				delay : 2000,
				startIndex : -1,
				fadeFirstImage : true
			},options);

			var nextPic,
				pics    =this,
				indx    =options.startIndex,
				plen    =this.length,
				fadeIn  ={opacity:1},
				fadeOut ={opacity:0};

			pics.css(fadeOut);
			options.fadeFirstImage || pics.eq(0).css(fadeIn);

			(nextPic=function(){
				pics.eq(indx).animate(fadeOut,options.duration,ease);
				indx=indx<plen-1?indx+1:0;
				pics.eq(indx).animate(fadeIn,options.duration,ease,function(){
					setTimeout(nextPic,options.delay);
				});
			})();
		}
	});

	$(function(){
		$('.backimg > div').fadeLoop({
			duration : 1500,
			delay : 2000
		});
		$('section.slideshow p.desc').animate({'left':'0px','opacity':'1'},1200,ease);
		$('section.slideshow h1.title').animate({'left':'0px','opacity':'1'},900,ease);
	});

	
	

})(window.Zepto || window.jQuery);