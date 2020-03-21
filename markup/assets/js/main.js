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
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
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
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 1,
        arrows: false,
        mobileFirst: true,
        infinite: false,
        adaptiveHeight: true,
        speed: 100,
        responsive: [
          {
            breakpoint: 0,
            settings: 'unslick'
          },
          {
            breakpoint: 640,
            // settings: 'unslick'
          }
        ]
      });



    }


  });




})(jQuery);
