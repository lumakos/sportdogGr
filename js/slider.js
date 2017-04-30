(function ($) {

    $(document).ready(function () {

        $('.carousel').on('slid.bs.carousel', function () {

          /* TopBanner Slider */
          var carouselData = $(this).data('bs.carousel');
          var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
          var total = carouselData.$items.length;

          // Now display this wherever you want
          var text = (currentIndex + 1) + "/" + total;
          $('#slidetext').text(text);

        });

        $(".right-carousel-control").on('mouseenter', function (e) {
            var currentActive = $('.carousel-inner').find('.item.active');
            console.log(currentActive);
            var next = currentActive.find('.template').html();
            console.log(next);

            if (typeof next != 'undefined') {
              setTimeout(function() {
                $('.next-btn').after(next);
              }, 1000);
            }
        }).on('mouseleave', function (e) {
            $('.carousel-control').find('.preview').remove();
        });

        $(".left-carousel-control").on('mouseenter', function (e) {
            var preActive = $('.carousel-inner').find('.item.active').prev();
            var previous = preActive.find('.template').html();
            if (typeof previous != 'undefined') {
              setTimeout(function() {
                $('.prev-btn').after(previous);
              }, 1000);
            }
        }).on('mouseleave', function (e) {
            $('.carousel-control').find('.preview').remove();
        });

        /* Slider Nerwork */
        // Instantiate the Bootstrap carousel
        $('.multi-item-carousel').carousel({
          interval: false
        });

        // for every slide in carousel, copy the next slide's item in the slide.
        // Do the same for the next, next item.
        $('.multi-item-carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          } else {
          	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
        });

    });

}(jQuery));
