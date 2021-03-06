//Check off specific todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('checked');
})

//Click on X to delete
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type = 'text']").on('keypress', function(event){
  if (event.which === 13){
    var todoText = $(this).val();
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
    $(this).val("");
  };

});

$('.fa-pencil').click(function(){
  $('input[type = "text"]').fadeToggle();
});
