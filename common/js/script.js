$(document).ready(function(){
	$('.mainVisual .clear').bxSlider({
		controls : false,
		//auto : true,
		pause : 3000,
		moveSlides: 1
	});
	
	$('.quickProd ul').bxSlider({
		mode: 'vertical',
		pager: false,
		minSlides: 3,
		moveSlides: 1
	});
	
	$('.cntLbIMG ul').bxSlider({
		  mode: 'fade',
		  speed : 10,
		  pager:false,
		  nextSelector: '#lbNext',
		  prevSelector: '#lbPrev'
	});
	
	// 퀵 show/view
	var btnOpen = $(".btnOpen[href=#]");
	var btnClose = $(".btnClose[href=#]");
	var quickCont = $(".quickCont");
	var hAside = $("header > aside");
	function sideOpen(){
		btnOpen.fadeOut(100);
		quickCont.animate({
			right:"0px"
		},400);
		hAside.animate({
			marginRight : "70px"
		},400);
		return false;
	}
	function sideClose(){
		btnOpen.fadeIn(100);
		quickCont.animate({
			right:"-160px"
		},400);
		hAside.animate({
			marginRight : "0"
		},400);
		return false;
	}
	btnOpen.click(sideOpen).focus(sideOpen);
	btnClose.click(sideClose).focus(sideClose);
	
	

    var popupBx = $('.box_popup');
    if(popupBx.length !== 0){
    	$('body').append('<div class="bg_popup" hidden />');
    }
	var popup_bg = $('.bg_popup');
    popupBx.hide();

	$(window).resize(function(){
		var popup_visible = $('.box_popup');
		popup_visible.css({
			marginTop: - popup_visible.height()/2,
			marginLeft: - popup_visible.width()/2
		});
	}).resize();
    function open_pop(){
    	var t = $(this);
		popup_bg.fadeIn(200);
		popupBx.fadeIn(200);
		$(window).resize();
    }
    function close_pop(){
		popupBx.fadeOut(200);
		popup_bg.fadeOut(200);
    }
	/* open */
	$('a#btn_pop_agree').click(open_pop);
	/* close */
	$('a.btn_pop_close').click(close_pop);

	var midNav = $('.midNav');
	midNav.find('.depth2').hide();			
	midNav.each(function(){
		var t = $(this);
		t.height(t.find('li.active>div').height() + t.height());				
	});
	function depthOpen(){				
		var t = $(this);
		var t_ul = t.parent('ul');				
		var num = t.index()+1;				
		t.addClass("active").siblings('li').removeClass("active");				
		t_ul.removeClass().addClass("midNavBg" + num);			
						t.addClass('active').find('.depth2').show().siblings('li').removeClass('active');
		if(t.find('>a').attr('href') === '#'){
			return false;
		}
	}
	midNav.find('> .midNavInner > ul > li').mouseover(depthOpen);
	
	function depthClose(){	
		var t = $(this);
		var t_ul = t.parent('ul');		
		t.find('.depth2').hide();
		t.removeClass('active');
		t_ul.removeClass();
	}
	midNav.find('> .midNavInner > ul > li').mouseleave(depthClose);
});





$(window).on("scroll",function(){
	var winScroll = $(window).scrollTop();
	var headHeight = $("header").height() + 18;
	var visualHiehgt = $(".mainVisual").height();
	var headerHeight = visualHiehgt - headHeight;
		//console.log(visualHiehgt);
	
	if(winScroll <= headerHeight){
		$(".midNav").css({"top": visualHiehgt + "px"}).removeClass('fixed');
	}else{
		$(".midNav").css({"top": headHeight + "px"}).addClass('fixed');
	};
});