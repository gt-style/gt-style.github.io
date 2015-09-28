  // <!-- Подключаем lightbox -->      
            $(document).ready(function(){
                $('.nivo a').nivoLightbox();
            });
        // <!-- Подключаем скролинг -->
            $(document).ready(function() {
                $.scrollIt({
                    topOffset: -20
                });
                var $window = $(document),
                $navigation = $("#fix_menu");
                
                if (!$navigation.hasClass("fixed") && ($window.scrollTop() > $navigation.offset().top)) {
                    $navigation.addClass("fixed").data("top", $navigation.offset().top);
                } 
                
                $window.scroll(function() {
                    if (!$navigation.hasClass("fixed") && ($window.scrollTop() > $navigation.offset().top)) {
                        $navigation.addClass("fixed").data("top", $navigation.offset().top);
                    }
                    else if ($navigation.hasClass("fixed") && ($window.scrollTop() <= 564)) {
                        $navigation.removeClass("fixed");
                    }
                });
            });
        // <!-- Подключаем счетчик -->
            $(function(){
                $(document).ready( function(){
                    var addDays = 288000000;
                    var timerData = $.cookie('timerData'); 
                    var currTime =  (new Date()).getTime();
                    var newTime =  (new Date()).getTime() + addDays;
                    if (timerData) {
                        if (timerData<currTime) {
                            timerData = newTime;
                        }
                    }
                    else {
                        timerData = newTime; 
                    }
                    $.cookie('timerData',timerData);
                    $('.counter').each(function(){
                        $(this).countdown({
                            timestamp : actionEndDate
                        });
                    });
                });	
            });

        // <!-- Увиличение картинок -->

        // <!-- Подключаем форму -->
           // $(function(){
             //   $('#contactable').contactable();
               // $('#contactable_1').contactable_1();

            //});
			
        // <!-- Подключаем отзывы -->
            $(function(){
				$('.show').click(function(event){
					event.preventDefault();
					$(this).hide().parent().find('.hidden').slideDown();
				});
				$('.hidden').hover(function(){},function(){
					$(this).slideUp().parent().find('.show').fadeIn();
				})
            });
			
var runOnce = true;
function discont(){
	$(function(){
		$('html,body').scrollTo('#order', '#order');
		
		var counters = {};
		var i = 0;

				counters['discont'] = 65;
				counters['price'] = 1555;
				counters['delivery'] = 1697;

			jQuery.each( counters, function( i, val ) {
				//console.log(i + ' - ' +val);
				jQuery({countNum: 0}).delay(1000).animate({countNum: val}, {
				  duration: 4000,
				  easing:'linear',
				  step: function() {
					jQuery('#'+i).text(Math.floor(this.countNum));
				  },
				  complete : function(){
					jQuery('#'+i).text(counters[i]);
				  }
				});
				
			});
		$(".buy1").html("1555");
		$("#pricenew").html("1555 руб.");
		$("#pricenewspan").html("65%");
	});
}
