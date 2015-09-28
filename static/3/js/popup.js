$(document).ready(function() {

	//Когда вы нажмете на ссылку с классом poplight и HREF начинается с a # 
	/*$('a.poplight[href^=#]').click(function() {
		var popID = $(this).attr('data-rel'); //Get Popup Name
		var popURL = $(this).attr('href'); //Получить Popup HREF и определить размер
	 
		//Запрос и  Переменные от HREF URL
		var query= popURL.split('?');
		var dim= query[1].split('&');
		var popWidth = dim[0].split('=')[1]; //Возвращает первое значение строки запроса
	 
		// Добавить кнопку "Закрыть" в наше окно, прописываете прямой путь к картинке
		$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="/static/3/img/close_pop.png" class="btn_close" title="Close" alt="Close" /></a>');
	 
		//Определяет запас на выравнивание по центру (по вертикали по горизонтали)мы добавим 80px к высоте / ширине, значение полей вокруг содержимого (padding) и ширину границы устанавливаем в CSS
		var popMargTop = ($('#' + popID).height() + 80) / 2;
		var popMargLeft = ($('#' + popID).width() + 80) / 2;
	 
		//Устанавливает величину отступа на Popup
		$('#' + popID).css({
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
	 
	   //Постепенное затемнение фона
		$('body').append('<div id="fade"></div>'); //Добавляем fade тегу body.
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Постепенное исчезание слоя - .css({'filter' : 'alpha(opacity=80)'}) используется для фиксации в IE , фильтр для устранения бага тупого IE 
	 
		return false;
	});
	 
	//Закрыть всплывающие окна и затемненный фон
	$('a.close, #fade').live('click', function() { //При нажатии на кнопку или затемненный фон.
		$('#fade , .popup_block').fadeOut(function() {
			$('#fade, a.close').remove();
		});
		return false;
	});*/
			//всплытие окон заказа
		$('a#popup1').click(function(){
			$('#popupwindow1').css('display','block').animate({opacity: 1}, 500);
			$('.around').css('display','block').animate({opacity: 1}, 800);
			dailinet = 'net';
			return false;
		});
		
		$('a#popup2').click(function(){
			$('#popupwindow2').css('display','block').animate({opacity: 1}, 500);
			$('.around').css('display','block').animate({opacity: 1}, 800);
			dailinet = 'net';
			return false;
		});
		
		$('a#popup3').click(function(){
			$('#popupwindow3').css('display','block').animate({opacity: 1}, 500);
			$('.around').css('display','block').animate({opacity: 1}, 800);
			dailinet = 'net';
			return false;
		});
		$('a#popup4').click(function(){
			$('#popupwindow4').css('display','block').animate({opacity: 1}, 500);
			$('.around').css('display','block').animate({opacity: 1}, 800);
			dailinet = 'net';
			return false;
		});
			$('a#popup5').click(function(){
			$('#popupwindow5').css('display','block').animate({opacity: 1}, 500);
			$('.around').css('display','block').animate({opacity: 1}, 800);
			dailinet = 'net';
			return false;
		});
		
		$('.close').click(function(){
			$('#popupwindow1,#popupwindow2,#popupwindow3,#popupwindow4,#popupwindow5').css('display','none');
			$('.around').css('display','none');
			dailinet = 'da';
		});
		
		$('.around').click(function(){
			$('#popupwindow1,#popupwindow2,#popupwindow3,#popupwindow4,#popupwindow5').css('display','none');
			$('.around').css('display','none');
			dailinet = 'da';
		});
});

