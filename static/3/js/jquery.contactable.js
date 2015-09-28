/*
 * contactable 1.2.1 - jQuery Ajax contact form
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Revision: $Id: jquery.contactable.js 2010-01-18 $
 *
 */
 
//extend the plugin
(function($){

	//define the new for the plugin ans how to call it	
	$.fn.contactable = function(options) {
		//set default options  
		var defaults = {
			url: '/contactable/mail.php',
			name: 'Ваше имя',
			number: 'Телефон',
			email: 'Ваш E-mail',
			message : 'Сообщение',
			subject : 'Заказ с сайта CASIO G-SHOCK',
            page : location.href,
			submit : 'Отправить письмо',
			recievedMsg : 'Благодарю вас за заказ!',
			notRecievedMsg : 'Извините, но при отправке письма произошла ошибка, попробуйте позже',
			disclaimer: 'Пожалуйста, не стесняйтесь отправлять сообщения. Я буду очень признателен за все отзывы и с радостью отвечу на все ваши вопросы!',
			hideOnSubmit: false

		};

		//call in the default otions
		var options = $.extend(defaults, options);
		//act upon the element that is passed into the design    
		return this.each(function() {
			//construct the form
			var this_id_prefix = '#'+this.id+' ';
			$(this).html('<form class="contactForm" method="" action=""><div class="loading"></div><div class="callback"></div><div class="holder"><input class="name" name="name" placeholder="Ваше имя"/><input class="name" name="number" placeholder="Ваш телефон"/><input class="send" type="submit" value="Заказать"/></div></form>');
			
			//show / hide function
			$(this_id_prefix+'div.contactable_inner').toggle(function() {
				$(this_id_prefix+'.overlay').css({display: 'block'});
				$(this).animate({"marginLeft": "-=5px"}, "fast"); 
				$(this_id_prefix+'.contactForm').animate({"marginLeft": "-=0px"}, "fast");
				$(this).animate({"marginLeft": "+=387px"}, "slow"); 
				$(this_id_prefix+'.contactForm').animate({"marginLeft": "+=390px"}, "slow"); 
			}, 
			function() {
				$(this_id_prefix+'.contactForm').animate({"marginLeft": "-=390px"}, "slow");
				$(this).animate({"marginLeft": "-=387px"}, "slow").animate({"marginLeft": "+=5px"}, "fast"); 
				$(this_id_prefix+'.overlay').css({display: 'none'});
			});
			
			//validate the form 
			$(this_id_prefix+".contactForm").validate({
				//set the rules for the fild names
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					}
				},
				//set messages to appear inline
					messages: {
						name: "",
						number: "",
						email: "",
						message: ""
					},			

				submitHandler: function() {
					$(this_id_prefix+'.holder').hide();
					$(this_id_prefix+'.loading').show();
$.ajax({
  type: 'POST',
  url: '/contactable/mail.php',
  data: {subject:options.subject, page:options.page, name:$(this_id_prefix+'.name').val(), number:$(this_id_prefix+'.number').val(), email:$(this_id_prefix+'.email').val(), message:$(this_id_prefix+'.message').val()},
  success: function(data){
						$(this_id_prefix+'.loading').css({display:'none'}); 
						
						if( data == 'success') {
						
							$(this_id_prefix+'.callback').show().append(options.recievedMsg);
							if(options.hideOnSubmit == true) {
								//hide the tab after successful submition if requested
								$(this_id_prefix+'.contactForm').animate({dummy:1}, 2000).animate({"marginLeft": "-=450px"}, "slow");
								$(this_id_prefix+'div.contactable_inner').animate({dummy:1}, 2000).animate({"marginLeft": "-=447px"}, "slow").animate({"marginLeft": "+=5px"}, "fast"); 
								$(this_id_prefix+'.overlay').css({display: 'none'});	
								window.onbeforeunload = null;
							}
						} else {
							$(this_id_prefix+'.callback').show().append(options.notRecievedMsg);
							setTimeout(function(){
								$(this_id_prefix+'.holder').show();
								$(this_id_prefix+'.callback').hide().html('');
							},2000);
						}
					},
  error:function(data){
	
						$(this_id_prefix+'.loading').css({display:'none'}); 
						$(this_id_prefix+'.callback').show().append(options.notRecievedMsg);
                                        }
});		
				}
			});
		});
	};
	
    //define the new for the plugin ans how to call it	
	$.fn.contactable_1 = function(options) {
		//set default options  
		var defaults = {
			url: '/contactable/mail.php',
			name: 'Ваше имя',
			number: 'Телефон',
			email: 'Ваш E-mail',
			message : 'Сообщение',
			subject : 'Заказ с сайта CASIO G-SHOCK',
            page : location.href,
			submit : 'Отправить письмо',
			recievedMsg : 'Благодарю вас за заказ!',
			notRecievedMsg : 'Извините, но при отправке письма произошла ошибка, попробуйте позже',
			disclaimer: 'Пожалуйста, не стесняйтесь отправлять сообщения. Я буду очень признателен за все отзывы и с радостью отвечу на все ваши вопросы!',
			hideOnSubmit: false

		};

		//call in the default otions
		var options = $.extend(defaults, options);
		//act upon the element that is passed into the design    
		return this.each(function() {
			//construct the form
			var this_id_prefix = '#'+this.id+' ';
			$(this).html('<form class="contactForm_1" method="" action=""><div class="loading"></div><div class="callback"></div><div class="holder"><input class="name" name="name" placeholder="Ваше имя"/><input class="name" name="number" placeholder="Ваш телефон"/><span class="info">Цена с доставкой: <span>1990 руб.</span></span><input class="send" type="submit" value="Заказать"/></div></form>');
			
			//show / hide function
			$(this_id_prefix+'div.contactable_1_inner').toggle(function() {
				$(this_id_prefix+'.overlay').css({display: 'block'});
				$(this).animate({"marginLeft": "-=5px"}, "fast"); 
				$(this_id_prefix+'.contactForm_1').animate({"marginLeft": "-=0px"}, "fast");
				$(this).animate({"marginLeft": "+=387px"}, "slow"); 
				$(this_id_prefix+'.contactForm_1').animate({"marginLeft": "+=390px"}, "slow"); 
			}, 
			function() {
				$(this_id_prefix+'.contactForm_1').animate({"marginLeft": "-=390px"}, "slow");
				$(this).animate({"marginLeft": "-=387px"}, "slow").animate({"marginLeft": "+=5px"}, "fast"); 
				$(this_id_prefix+'.overlay').css({display: 'none'});
			});
			
			//validate the form 
			$(this_id_prefix+".contactForm_1").validate({
				//set the rules for the fild names
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					}
				},
				//set messages to appear inline
					messages: {
						name: "",
						number: "",
						email: "",
						message: ""
					},			

				submitHandler: function() {
					$(this_id_prefix+'.holder').hide();
					$(this_id_prefix+'.loading').show();
$.ajax({
  type: 'POST',
  url: options.url,
  data: {subject:options.subject, page:options.page, name:$(this_id_prefix+'.name').val(), number:$(this_id_prefix+'.number').val(), email:$(this_id_prefix+'.email').val(), message:$(this_id_prefix+'.message').val()},
  success: function(data){
						$(this_id_prefix+'.loading').css({display:'none'}); 
						if( data == 'success') {
							$(this_id_prefix+'.callback').show().append(options.recievedMsg);
							if(options.hideOnSubmit == true) {
								//hide the tab after successful submition if requested
								$(this_id_prefix+'.contactForm_1').animate({dummy:1}, 2000).animate({"marginLeft": "-=450px"}, "slow");
								$(this_id_prefix+'div.contactable_1_inner').animate({dummy:1}, 2000).animate({"marginLeft": "-=447px"}, "slow").animate({"marginLeft": "+=5px"}, "fast"); 
								$(this_id_prefix+'.overlay').css({display: 'none'});	
								yaCounter23687809.reachGoal('ORDER');
								window.onbeforeunload = null;
							}
						} else {
							$(this_id_prefix+'.callback').show().append(options.notRecievedMsg);
							setTimeout(function(){
								$(this_id_prefix+'.holder').show();
								$(this_id_prefix+'.callback').hide().html('');
							},2000);
						}
					},
  error:function(){
						$(this_id_prefix+'.loading').css({display:'none'}); 
						$(this_id_prefix+'.callback').show().append(options.notRecievedMsg);
                                        }
});		
				}
			});
		});
	};
	
	//define the new for the plugin ans how to call it	
	$.fn.contactable_2 = function(options) {
		//set default options  
		var defaults = {
			url: '/contactable/mail.php',
			name: 'Ваше имя',
			number: 'Телефон',
			email: 'Ваш E-mail',
			message : 'Сообщение',
			subject : 'Заказ с сайта CASIO G-SHOCK',
            page : location.href,
			submit : 'Отправить письмо',
			recievedMsg : 'Благодарю вас за заказ!',
			notRecievedMsg : 'Извините, но при отправке письма произошла ошибка, попробуйте позже',
			disclaimer: 'Пожалуйста, не стесняйтесь отправлять сообщения. Я буду очень признателен за все отзывы и с радостью отвечу на все ваши вопросы!',
			hideOnSubmit: false

		};

		//call in the default otions
		var options = $.extend(defaults, options);
		//act upon the element that is passed into the design    
		return this.each(function() {
			//construct the form
			var this_id_prefix = '#'+this.id+' ';
			$(this).html('<form class="contactForm_2" method="" action=""><div class="loading"></div><div class="callback"></div><div class="holder"><input class="name" name="name" placeholder="Ваше имя"/><input class="name" name="number" placeholder="Ваш телефон"/><span class="info">Цена с доставкой: <span id="delivery">1990</span><span> руб.</span></span><input class="send" type="submit" value="Заказать"/></div></form>');
			
			//show / hide function
			$(this_id_prefix+'div.contactable_2_inner').toggle(function() {
				$(this_id_prefix+'.overlay').css({display: 'block'});
				$(this).animate({"marginLeft": "-=5px"}, "fast"); 
				$(this_id_prefix+'.contactForm_2').animate({"marginLeft": "-=0px"}, "fast");
				$(this).animate({"marginLeft": "+=387px"}, "slow"); 
				$(this_id_prefix+'.contactForm_2').animate({"marginLeft": "+=390px"}, "slow"); 
			}, 
			function() {
				$(this_id_prefix+'.contactForm_2').animate({"marginLeft": "-=390px"}, "slow");
				$(this).animate({"marginLeft": "-=387px"}, "slow").animate({"marginLeft": "+=5px"}, "fast"); 
				$(this_id_prefix+'.overlay').css({display: 'none'});
			});
			
			//validate the form 
			$(this_id_prefix+".contactForm_2").validate({
				//set the rules for the fild names
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					}
				},
				//set messages to appear inline
					messages: {
						name: "",
						number: "",
						email: "",
						message: ""
					},			

				submitHandler: function() {
					$(this_id_prefix+'.holder').hide();
					$(this_id_prefix+'.loading').show();

$.ajax({
  type: 'POST',
  url: options.url,
  data: {subject:options.subject, page:options.page, name:$(this_id_prefix+'.name').val(), number:$(this_id_prefix+'.number').val(), email:$(this_id_prefix+'.email').val(), message:$(this_id_prefix+'.message').val()},
  success: function(data){
		$(this_id_prefix+'.loading').css({display:'none'}); 
		
		if( data == 'success') {
			$(this_id_prefix+'.callback').show().append(options.recievedMsg);
			if(options.hideOnSubmit == true) {
				//hide the tab after successful submition if requested
				$(this_id_prefix+'.contactForm_2').animate({dummy:1}, 2000).animate({"marginLeft": "-=450px"}, "slow");
				$(this_id_prefix+'div.contactable_2_inner').animate({dummy:1}, 2000).animate({"marginLeft": "-=447px"}, "slow").animate({"marginLeft": "+=5px"}, "fast"); 
				$(this_id_prefix+'.overlay').css({display: 'none'});	
				yaCounter23687809.reachGoal('ORDER');
								window.onbeforeunload = null;
			}
		} else {
			$(this_id_prefix+'.callback').show().append(options.notRecievedMsg);
			setTimeout(function(){
				$(this_id_prefix+'.holder').show();
				$(this_id_prefix+'.callback').hide().html('');
			},2000);
		}
	},
  error:function(){
	
						$(this_id_prefix+'.loading').css({display:'none'}); 
						$(this_id_prefix+'.callback').show().append(options.notRecievedMsg);
                                        }
});		
				}
			});
		});
	};

})(jQuery);
