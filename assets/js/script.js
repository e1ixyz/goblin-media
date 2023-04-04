$(document).ready(function() {
    $('.button').hover(
      function() {
        $(this).find('.gif').attr('src', $(this).find('.gif').attr('src'));
      },
      function() {
        $(this).find('.gif').attr('src', '');
      }
    );
  });
