jQuery(document).ready(function() {
    jQuery('[data-youtube]').youtube_background();
});

$('.banner-all-item').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  autoplayTimeout:150000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('.service-banner').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.our-partner').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})



/* Catagory JS */
$(document).ready(function(){

    $('.list').click(function(){

        var value = $(this).attr('data-filter');

        if(value == 'all'){
            $('.items').show('1000');
        }
        else if(value == '.dining'){
            $('.dining1').show();
            $('.golf1').hide();
            $('.spa1').hide();
            $('.trans1').hide();
            $('.ose1').hide();
        }
        else if(value == '.golf'){
            $('.golf1').show();
            $('.dining1').hide();
            $('.spa1').hide();
            $('.trans1').hide();
            $('.ose1').hide();
            
        }
        else if(value == '.spa'){
            $('.spa1').show();
            $('.dining1').hide();
            $('.golf1').hide();
            $('.trans1').hide();
            $('.ose1').hide();     
        }
        else if(value == '.trans'){
            $('.trans1').show();
            $('.spa1').hide();
            $('.dining1').hide();
            $('.golf1').hide();
            $('.ose1').hide();     
        }

        else if(value == '.ose'){
            $('.ose1').show();   
            $('.spa1').hide();
            $('.dining1').hide();
            $('.golf1').hide();
            $('.trans1').hide();  
        }
        else{
            $('.items').show('1000');
        }
        $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    
    });
    
});
