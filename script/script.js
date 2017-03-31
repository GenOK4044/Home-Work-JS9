$(document).ready(function(){
  $('.bxslider').bxSlider({
  	  adaptiveHeight: true,
  	  mode: 'vertical',
  	  slideMargin: 5,
  	  easing:'cubic-bezier(.6,1.1,.97,.95)',
  	  speed:'800'
  });
});


  $('select').niceSelect({});


 $( '.menu li' ).hover(
        function(){
            $(this).children('ul').slideDown(200);
        },
        function(){
            $(this).children('ul').slideUp(200);
        }
    );


    // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
    $('.decor_checkbox').each(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop("checked")) $(this).addClass("check_active");
    });
 
    // при клике по диву, делаем проверку
    $('.decor_checkbox').click(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        // если чекбокс был активен
        if(checkbox.prop("checked")){
            // снимаем класс с родительского дива
            $(this).removeClass("check_active");
            // и снимаем галочку с чекбокса
            checkbox.prop("checked", false);
        // если чекбокс не был активен
        }else{
            // добавляем класс родительскому диву
            $(this).addClass("check_active");
            // ставим галочку в чекбоксе
            checkbox.prop("checked", true);
        }
});






