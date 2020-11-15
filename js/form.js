/*https://pisuke-code.com/jquery-draggable-keep-width/ */
$(function() {
  $('#form_rows').sortable({
    axis: "y",
    "opacity": 0.5,
  });
  $( '#type_menu .form_row' ).draggable({
    connectToSortable: '#form_rows',
    helper: 'clone',
    revert: 'invalid',
  });
  $( 'ul, li' ).disableSelection();
});

$(document).on('blur', 'input[type="text"]', function() {
  var parent = $(this).parent();
  var input_message = parent.children('input[type="text"]').val();
  parent.children('.inputed_text').text(input_message);
});


$(document).on('click', '.edit', function(){
    var parent = $(this).parent().parent();
    $('.form_row').removeClass('is-active');
    $('.form_row').removeClass('non-active');
    $('.form_row').toggleClass('non-active');
    parent.removeClass("non-active");
    parent.toggleClass('is-active');
    parent.children('.input_text').focus(); 
});

$(document).on('click', '.delete', function(){
  $(this).parent().parent().remove();
});

$(document).on('click', '.add', function() {
  $('#form_rows').prepend('<div class="form_row"><div class="actions"><a class="btn pull-right action_link delete" href="#">&times;</a><a class="btn pull-right action_link edit" href="#">&#9998;</a></div><div class="label">設問文</div><input type="text" class="input_text"><div class="inputed_text">設問文</div></div>');
});

$(document).on('click', '.form_row', function(){
  //$(this).children().blur();   
});
  
$(document).on('click', '.btn_done', function(){
  $(this).parent().toggleClass('is-active'); 
});

$(document).on('click', '.input', function(){
  $(this).parent().removeClass('is-active');
});


  
  