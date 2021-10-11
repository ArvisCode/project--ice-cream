    $('.reviews__list').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 1500, 
      puaseOnFocuse:true, 
      puaseOnHover: true, 
      puaseOnDotsHover: true,
      arrows: false, 
      fade: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
       
      ] 
   
    });
