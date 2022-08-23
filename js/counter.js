//код не менять - работает для скольки угодно форм с классом formCounter
$.each($('.form-counter'),function(){
   $(this).find('.plus').on('click', function() {
     var val=parseInt($(this).siblings('.hid').val());
     var max=parseInt($(this).siblings('.hid').attr('max'));
     var count=parseInt($(this).siblings('.counter').text());
     if(val<max) {
       $(this).siblings('.hid').attr('value',val+1);
       $(this).siblings('.counter').text(count+1)
     }});
   $(this).find('.minus').on('click', function() {
     var val=parseInt($(this).siblings('.hid').val());
     var count=parseInt($(this).siblings('.counter').text());
     if (val!=50) {
       $(this).siblings('.hid').attr('value',val-1);
       $(this).siblings('.counter').text(count-1)
     }});
 });