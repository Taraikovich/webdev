$(document).ready(function(){
	$('.inline_element_wrapper2').mouseover(function(){
	  $(this).find('.serv_img').css({'transform': 'scale(1.1)', 'transition': '1s'});
	})
	 .mouseout(function(){
	  $(this).find('.serv_img').css({'transform': 'scale(1)'});
	});
	
	
	$('#show_menu').click(function(){ // задаем функцию при нажатиии на кнопку мобильного меню
	  $('#mobile_menu').slideDown();
	  $('#show_menu').hide();
	  $('#close_menu').fadeIn();
	 });
		$('#close_menu').click(function(){ // задаем функцию при нажатиии на кнопку закрыть мобильное меню
	  $('#mobile_menu').slideUp();
	  $('#close_menu').hide();
	  $('#show_menu').fadeIn();
	 });
	 
	$('.simple, .servicies_button, #phone span').click(function(){  
	  $('#callback_wrapper').fadeIn();
	});
	$('#close').click(function(){
	  $('#callback_wrapper').fadeOut();
	});
	
	$('#submit_call').click(function(){  
	  let name = $('#user_name').val();
   let phone = $('#user_phone').val();
   let problem = $('#user_problem').val();
   if ( name != '' && phone != ''){
	      $.ajax({
            type: 'post',
            url: 'mail.php', //Путь к обработчику
            data: ('user_name=' + name + '&&user_phone=' + phone + '&&user_problem=' + problem),
            success: function(data){
                $('#callback p').html('Спасибо за обращение, ' + name +', ожидайте звонка!');
                setTimeout(function(){
                    $('#callback_wrapper, #user_name, #user_phone, #user_problem, #submit_call').fadeOut(); 
                    $("#callback br").remove()}, 2000);
                    }
       })
    } else {
      $('#callback p').html('Пожалуйста, заполните все поля формы!');
    };
	});
	
		$('#vac_inline span').click(function(){ // задаем функцию при нажатиии на "Заполнить анкету"
	  $('#questionnaire').slideToggle();
	  $('#questionnaire button').click(function(){
	    let name = $('#q_name').val();
     let age = $('#q_age').val();
     let phone = $('#q_phone').val();
     let addr = $('#q_addr').val();
     let exp = $('#q_exp').val();
     let time = $('#q_time').val();
     let auto = $('#q_auto').val();
     let smoking = $('#q_smoking').val();
     let jail = $('#q_jail').val();
     let other = $('#q_other').val();
     if ( name != '' && phone != '' && age != '' && addr != '' && exp != '' && time != '' && auto != ''  && smoking != '' && jail != '' && other != ''){
	    $.ajax({
            type: 'post',
            url: 'mail_questionnaire.php', //Путь к обработчику
            data: ('name=' + name + '&&phone=' + phone + '&&age=' + age + '&&addr=' + addr + '&&exp=' + exp + '&&time=' + time + '&&auto=' + auto + '&&smoking=' + smoking + '&&jail=' + jail + '&&other=' + other),
            success: function(data){
                $('#questionnaire p').html('Спасибо, мы получили вашу анкету!');
                $('#questionnaire button').hide();
           }
       })
     } else {
      $('#questionnaire p').html('Пожалуйста, заполните все поля анкеты!');
     };
	  });
	 });
	
		$('#map_submit').click(function(){  
	  let name = $('#user_name2').val();
   let phone = $('#user_phone2').val();
   let message = $('#user_message').val();
   if ( name != '' && phone != '' && message != ''){
	  $.ajax({
            type: 'post',
            url: 'mail.php', //Путь к обработчику
            data: ('user_name=' + name + '&&user_phone=' + phone + '&&user_message=' + message),
            success: function(data){
                $('#map_p').html('Сообщение отправлено!');
           }
       })
    } else {
      $('#map_p').html('Пожалуйста, заполните все поля формы!');
    };
	});
	
	// код карусели, считаем кол-во элементов  
	let len = $('.review_block').size();
	let count = 0;
	
	$('.review_block').eq(0).show();
	
	$('#prev, #prev_m').click(function(){ // задаем функцию при нажатиии на кнопку назад
	     let current = count;
	     if (count == 0) {
	        count = len - 1;
	     } 
	     else count = count - 1;
	     $('.review_block').eq(current).hide();	
	     $('.review_block').eq(count).fadeIn();     
	  });
	$('#next, #next_m').click(function(){ // задаем функцию при нажатиии на кнопку вперёд
	     let current = count;
	     if (count == (len - 1)) {
	        count = 0;
	     } 
	     else count = count + 1;
	     $('.review_block').eq(current).hide();
	     $('.review_block').eq(count).fadeIn();
	  });
	$('li a').click(function () {
      elementClick = $(this).attr('href')
      destination = $(elementClick).offset().top - 90;
      $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
      return false;
   });
});