$(document).ready(function(){
    $('#mycarousel').carousel({ interval:2000});//2000ms or 2seconds so we are making it a bit faster for the sliding action to take place
    $('#carouselButton').click(function(){
       //over here we write what we want to do 
       if ($('#carouselButton').children('span').hasClass('fa-pause')) {
              $('#mycarousel').carousel('pause');   //activity paused
              $('#carouselButton').children('span').removeClass('fa-pause');
              $('#carouselButton').children('span').addClass('fa-play');  //icons changed
          }
       else if ($('#carouselButton').children('span').hasClass('fa-play')) {
              $('#mycarousel').carousel('cycle'); //activity continued
              $('#carouselButton').children('span').removeClass('fa-play');
              $('#carouselButton').children('span').addClass('fa-pause');  //icons changed
          }

           // #mycarousel ke tag dise jate pura process tai eii function er kotha mane
            }); //for the pause button if a click action is done by the user, then execute this particular function
 

});