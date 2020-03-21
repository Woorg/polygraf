import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import slick from 'slick-carousel';


(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #2948ff',
    'color: #fff',
    'display: inline-block',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://igrlv.ru', styles);


  /*
    Lazyload images
  */


  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: false
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }


  $(function() {


    // Slider

    var $variationsSlider = $('.variations__slider');

    if( $variationsSlider.length > 0 ) {

      $variationsSlider.slick({
        // slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 1,
        dots: false,
        mobileFirst: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 300,
        prevArrow: '.variations__slider-prev',
        nextArrow: '.variations__slider-next',

        responsive: [
          {
            breakpoint: 1,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },

          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });

    }



    var $booksSlider = $('.books__slider');

    if( $booksSlider.length > 0 ) {

      $booksSlider.slick({
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        mobileFirst: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 300,
        prevArrow: '.books__slider-prev',
        nextArrow: '.books__slider-next',

        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              arrows: false,

            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 2,
              arrows: false,

            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 4,
            }
          }
        ]
      });

    }


    var $clientsSlider = $('.clients__slider');

    if( $clientsSlider.length > 0 ) {

      $clientsSlider.slick({
        // slidesToShow: 3,
        slidesToScroll: 4,
        // initialSlide: 1,
        arrows: false,
        dots: true,
        mobileFirst: true,
        infinite: true,
        // adaptiveHeight: true,
        speed: 300,

        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 4,
              dots: true,
            }
          }
        ]
      });

    }


    // Video

    $(document).on('click','.video__button',function(e) {
      //отменяем стандартное действие button
      e.preventDefault();
      var poster = $(this);
      // ищем родителя ближайшего по классу
      var wrapper = poster.closest('.video__object');
      videoPlay(wrapper);
    });

    //вопроизводим видео, при этом скрывая постер
    function videoPlay(wrapper) {
      var iframe = wrapper.find('.video__iframe');
      // Берем ссылку видео из data
      var src = iframe.data('src');
      // скрываем постер
      wrapper.addClass('video__object_active');
      // подставляем в src параметр из data
      iframe.attr('src',src);
    }



    // Phone Mask

    // $('.form__field_phone input').mask("+ 7(999)999-99-99", {

    // });


    // Books gallery

    $('.books__item').magnificPopup({
      type: 'image',
      gallery:{
        enabled:false
      }
    });


    // Popup


    $('.open-popup').magnificPopup({
      type:'inline',
      midClick: true
    });



    // Clear input

    // $('input').on('focusin', function() {
    //   this.value = '';
    // });




  });




})(jQuery);
