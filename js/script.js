$(function() {
    
	// 페이지 단위로 넘기는 제이쿼리
	(function($){
        $.aniPage=function(e,type){
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                $("body, html").animate({
                    scrollTop:$(window).scrollTop()-$(window).height()
                },1000,function(){
                        $.aniOk = 0;
                });
            }else{
                $("body, html").animate({
                    scrollTop:$(window).scrollTop()+$(window).height()
                },1000,function(){
                        $.aniOk = 0;
                });
            }
        };
    })(jQuery);
    $(function(){
        $(".page").height($(window).height());
        $.aniOk=0;
        $(window).scrollTop(0);
    });
    $(document).on("mousewheel DOMMouseScroll",function(e){
        e.preventDefault();
        if($.aniOk == 0){
            $.aniPage(e,e.type);
            $.aniOk = 1;
        }
    });

	 // 네비메뉴 선택했을 때
	 $('nav li').click(function(event){
		event.preventDefault();
		
		var tg = $(this);
		var i = tg.index();
		console.log(i);
		var section = $('article').eq(i);

		var tt = section.offset().top;
		
		$('html, body').stop().animate({scrollTop:tt});
	 });

	 // 현제 페이제 네비버튼에 애니메이션 들어오도록
	 $(window).scroll(function(){
	  var sct = $(window).scrollTop();
	 
	  $("article").each(function(){
		var tg = $(this);
		var i = tg.index();
		 if(tg.offset().top <= sct){
			 $("#header nav li").removeClass('on');
			 $("#header nav li").eq(i).addClass('on');
		 }
	 });
   });

   // About me _ My Interest hover시 설명
   $('.explain').hide();
   $('.interest li').mouseenter( 
	   function(){
		   $(this).find('.explain').show();
	   }
	);
	$('.interest li').mouseleave( 
		function(){
			$('.explain').hide();
		}
	 );


   // 자격증 모달
   $(".open_btn_box").click(function(e){
	   e.preventDefault();
	   $('.license_modal').show();
   });

   $(".my_skills header > .ttl").click(function(){
		$('.license_modal').show();
   });	  

   $(".close_btn").click(function(e){
	   e.preventDefault();
	$('.license_modal').hide();
   });
	 
	// 프로젝트 썸네일 커버
	   $(".proj_img_cover").hide();
	   $('.proj_img').hover(
		 function(){
		   $('.proj_img_cover').show();
		 },
		 function(){
		   $('.proj_img_cover').hide();
		 }
	   );



	// project_all 프로젝트 =커버
   $(".img_cover").hide();
   $(".project_btns_area .project1").hover(
	 function(){
	   $(this).find(".img_cover").fadeIn("slow");
	 },
	 function(){
	  $(this).find(".img_cover").fadeOut("slow");
	 }
   );


   // 프로젝트1 모달
   	$("#proj_detail").click(function(e){
		   e.preventDefault();
		   $('.pro1_modal').show();
	});	  

	$(".pro1_modal .close_btn").click(function(e){
		  e.preventDefault();
		  $('.pro1_modal').hide();
	});



});