$(function(){
    //sticky
    var mainNav = $('.main-nav');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            mainNav.addClass('sticky');
            $('header').css({display:'none'});
            $('.alter').css({display:'none'});

        } else {
            mainNav.removeClass('sticky');
            $('header').css({display:'block'});
            $('.alter').css({display:'block'});
        }
    });
    $('.alter').click(function(){
        $(this).toggleClass('show');
        if($(this).hasClass('show')){
            mainNav.hide();
        }else{
            mainNav.show();
        }
    });
    //more-site
    var arr = $('.logo-wrap .arr');

    arr.click(function(){
        $('.more-site').toggleClass('visible');
    });
    //nav
    const navSwiper = new Swiper('.top-wrap .swiper-container',{
        direction: 'horizontal',
		loop: true,
        slidesPerView: 6,
        spaceBetween: 10
    });
    //main-slide
    const mainSwiper = new Swiper('.slide-content.swiper-container',{
        autoplay: {
            delay: 2500,
            disableOnInteraction : false,
          },
    });


    //   //real-time

      const realtimeSwiper = new Swiper('.real-time-rank.swiper-container',{
        direction: "vertical",
        autoplay: {
            delay: 2500,
            disableOnInteraction : false,
          },
    });
    //today
    
    function getTodayDate(){
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        
        return year +'-'+ month + '-' + day;
    }
    $('.date').text(getTodayDate);
    
  


    //editor-book
    const edSwiper = new Swiper('.editor-pick .swiper-container', {
        // Optional parameters
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 2,
          stretch: 70,
          depth: 150,
          modifier: 4,
          slideShadows: false
        }
    });
    //ad-slide

    const adSwiper = new Swiper('.ad .swiper-container',{
        spaceBetween:100,
		loop: true,  
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
    });

    //now-issue
    const issueSwiper = new Swiper('.now-issue .swiper-container',{
        slidesPerView: 2,
        spaceBetween:15,
        pagination: {
            el: ".swiper-pagination",
          }
    });

    //goods-slide
    const goodsSwiper = new Swiper('.aladin-goods .swiper-container',{
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
    });

    //sentence-slide
    const stSwiper = new Swiper('.book-sentence .swiper-container',{
        pagination: {
            el: ".swiper-pagination",
          }
    });

    $('.btm button').click(function(){
        $('.inform').toggleClass('show');
    });
    
    $('.like-box .like').click(function(e){
        e.preventDefault();
        $(this).find('i').attr('class','fas fa-heart').css({
            color:"#E8308A"
        });
    });
    //login-tab
   
        var tabLink = $('.member-nav li'),
	    formContent = $('form > div');


        tabLink.click(function(e){
            e.preventDefault();
            var targetidx = $(this).index();
            activateTab(targetidx);
             
        });
        tabLink.eq(0).click(function(e){
            if($(this).next().find('a').hasClass('on')){
                $(this).next().find('a').removeClass('on');
            }
            $(this).find('a').removeClass('off').addClass('on');
        });
        tabLink.eq(1).click(function(e){
            if($(this).prev().find('a').hasClass('on')){
                $(this).prev().find('a').removeClass('on');
            }
            $(this).find('a').removeClass('off').addClass('on');
        });

        function activateTab(i){
            formContent.hide(); //show 
            formContent.eq(i).show();
        }
        activateTab(0); 
    //make-star
    $('#makeStar').change(function(){
		var selectNum = $(this).val();
	
		for(var i = 0; i<selectNum; i++){
			$('.selectrating').find('.fa-star').eq(i).css({color:'#E82F8A'});
		}	
    });
    //rating
    $('.rating').each(function(){
        var $this = $(this)
         var score = $this.attr('data-rate');
         var cartItem ='';
   
         for(var i = 0; i<score; i++){
           $this.find('i').eq(i).css({color:'#E82F8A'});
         } 
      }); 
    //cart
    if($('.cart-form').length > 0){     
        var cartTarget = $('.result .count');
   
       function calcCartItem(){
         cartItem = $('.cart-list > li');
         var cartCount = cartItem.length;
         cartTarget.text(cartCount);
       }
      
       calcCartItem();
       
       var cartItemDel = $('.cart-list > li .circle-close');
    
      cartItemDel.click(function(){
       $(this).parent().remove();
       calcCartItem();
       calcTotalPrice();
      });
   
      /*
      함수명 calcTotalPrice 생성
      리스트들 마다 할일
       각각의 리스트안의 단가 수량 곱, 변수 itemTotal,
       itemTotal의 값이 합산되도록
       itemtotal의 값을 products_price 반영
       products_price  배송비와 합산
       total Price 반영
      */
   
       function calcTotalPrice(){
         cartItem = $('.cart-list > li');
         var itemTotal = 0;
   
         cartItem.each(function(){
           var itemPrice = $(this).find('.unit_price').attr('data-unit-price') * $(this).find('input').val();

        

           itemTotal += itemPrice;
         });
         $('.price_total').text(itemTotal+'원');
         var shippingCost = parseInt($('.shipping_cost').attr('data-shipping-cost'));

         $('.total_price').text((shippingCost + itemTotal)+'원');
       }
       
       calcTotalPrice();
   
       cartItem.find('input').change(function(){
         calcTotalPrice();
       });
      }//cart-form

      //popUp
       //popup
    var myPopup = $('.popup'),
    checkbox = $('#popup'),
    popupClose = $('.close');

    //쿠키 생성
    function setCookie(name, value, day){
        var date = new Date(); //현재 날짜 지정.
        date.setDate(date.getDate() + day);

        var mycookie = '';
        mycookie += name + '=' + value+';';
        mycookie +='Expires=' + date.toUTCString();

        document.cookie = mycookie; //쿠키 설정, 생성
    }
    //setCookie('ABC.com','Main',3);


    //쿠키 삭제
    function delCookie(name){
        var date = new Date();

        date.setDate(date.getDate() - 1);

        var setCookie = '';

        setCookie += name+'=Main;';
        setCookie +='Expires=' + date.toUTCString();

        document.cookie = setCookie; //쿠키 설정, 생성           
    }

    //쿠키 확인
    function checkCookie(name){
        var cookies = document.cookie.split(';');
        console.log(cookies);
        var visited = false; // 방문 거짓

        for(var i in cookies){
            if(cookies[i].indexOf(name) > -1){
                visited = true;
                console.log(visited);
            }                
        }
        console.log(visited);

        if(visited){
            //재방문
            myPopup.hide();
        }else{
            //신규방문
            myPopup.show();
        }
       
     }
    checkCookie('ABC.com');

    popupClose.click(function(){

        if(checkbox.prop('checked')){
            //팝업을 다시 안보겠다. 팝업 닫고, 쿠키 생성.
            setCookie('ABC.com','Main',1);
            myPopup.hide();
        } else{
            //팝업을 계속 본다. 팝업 닫고, 쿠키 제거.
            myPopup.hide();
            delCookie('ABC.com');
        }

    });        
   
});