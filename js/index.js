$(function() {

$('.header-full-bleed').backstretch(
  ['/img/islandparty-4581.jpg'
  ,'/img/islandparty-4123.jpg'
  ,'/img/islandparty-4549.jpg'
  //,'/img/islandparty-4172.jpg'
  //,'/img/islandparty-4589.jpg'
  //,'/img/islandparty-4232.jpg'
  //,'/img/islandparty-4584.jpg'
  //,'/img/islandparty-4513.jpg'
  ], {duration: 5000, fade: 1500, lazyload: true}
);

$('.site-nav--link').click(function(){
    if ( $(this).attr('href') === "#" ) {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    }
    else {
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 50
      }, 500);
    }
    return false;
});

$('#toggle-lineup-view').click(function(){
  if ( $('#lineup-view').is(':visible') ) {
    $('#lineup-view').hide();
    $('#schedule-view').show();
    $(this).text('view lineup');
  }
  else {
    $('#schedule-view').hide();
    $('#lineup-view').show();
    $(this).text('view schedule');
  }
});

});

// progress bar for hero unit slideshow
/*<script src="/js/progress.js"></script>
<script>
$(function() {
$('.header-full-bleed').backstretch("pause");

$(window).on("backstretch.after", function (e, instance, index) {
  // If we wanted to stop the slideshow after it reached the end
  progressJs('.header-full-bleed')
    .autoIncrease(5,800)
    .onprogress(function(targetElm, percent) {
      if(percent > 99) {
        progressJs(targetElm).set(1);
        $('.header-full-bleed').backstretch("next");
      }
    })
    .start();
});

});
</script>
*/