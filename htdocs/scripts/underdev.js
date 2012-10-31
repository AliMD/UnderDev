// Zepto/jQuery fadeLoop plugin for fade slide show effects by ali.md

(function($){
	var	ease = !!window.Zepto ? 'ease-out' : 'swing';
	$.extend($.fn,{
		fadeLoop :function(options){

			options=$.extend({
				duration : 2500,
				freez : 1500,
				delay : 10,
				startIndex : 0,
				fadeFirstImage : true,
				zIndex : -3,
				zIndexAct : -2
			},options);

			options.startIndex--;

			var nextPic,
				pics    =this,
				indx    =options.startIndex,
				plen    =this.length,
				fadeIn  ={opacity:1},
				fadeOut ={opacity:0};

			var nextPic = function(){
				pics.eq(indx).animate(fadeOut,options.duration,ease,function(){
					 $(this).css({'z-index':options.zIndex});

				});
				indx=indx<plen-1?indx+1:0;
				setTimeout(function(){
					pics.eq(indx).css({'z-index':options.zIndexAct}).animate(fadeIn,options.duration,ease,function(){
						setTimeout(nextPic,options.freez);
					});
				},options.delay+10);
			};

			pics.css(fadeOut).css({'z-index':options.zIndex});

			if(!options.fadeFirstImage){
				pics.eq(0).css(fadeIn).css({'z-index':options.zIndexAct});
				indx++;
				setTimeout(nextPic,options.freez);
			}else{
				nextPic();
			}
		}
	});

	$(function(){
		$('.backimg > div').fadeLoop({
			delay : 200,
			freez : 3000,
			duration : 1300,
			zIndex : -3,
			zIndexAct : -2,
			startIndex : 0,
			fadeFirstImage : true
		});

		$('section.slideshow p.desc').animate({'left':'0px','opacity':'1'},1200,ease);
		$('section.slideshow h1.title').animate({'left':'0px','opacity':'1'},900,ease);

		function validateText(str,len){
	return str.length >= len;
}



	function validateEmail(str){
		var emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i ;

		return emailPattern.test(str);
	}

	$('#contact-form').submit(function(){
		var target, err = false;

		target = $('#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#subject');
		if( validateText(target.val(),5) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#mail');
		if( validateEmail(target.val()) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#txt');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		if(!err){
			$('#ifrm').animate({
				height:'75px'
			},500);
		}

		return !err;

	});

	$('#reset').click(function(){
		$('#ifrm').animate({
			height:'0px'
		},200);
		});
	
});

})(window.Zepto || window.jQuery);