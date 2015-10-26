$(document).ready(function(){
    $(".news-row").click(function(){
      $next = $(this).next();
      $next.slideToggle(1500,"easeOutBack");
      $(this).parent().siblings().children().next().slideUp();
      return false;
    });
});
