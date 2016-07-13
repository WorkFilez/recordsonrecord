$(document).ready(function(){
  $.adaptiveBackground.run();

  var slider = $('.peppermint')
  slider.Peppermint();
  $('.nav--right').click(slider.data('Peppermint').next);
  $('.nav--left').click(slider.data('Peppermint').prev);
});