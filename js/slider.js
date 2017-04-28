(function ($) {

    $(document).ready(function () {

        $('.carousel').on('slid.bs.carousel', function () {

          var carouselData = $(this).data('bs.carousel');
          var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
          var total = carouselData.$items.length;

          // Now display this wherever you want
          var text = (currentIndex + 1) + "/" + total;
          $('#slidetext').text(text);

        });

        $(".right").on('mouseenter', function (e) {
            var currentActive = $('.carousel-inner').find('.item.active').next();
            var next = currentActive.find('.template').html();

            if (typeof next != 'undefined') {
              $('.next-btn').after(next);
            }
        }).on('mouseleave', function (e) {
            $('.right div').remove();
        });

        $(".left").on('mouseenter', function (e) {
            var preActive = $('.carousel-inner').find('.item.active').prev();
            var previous = preActive.find('.template').html();
            if (typeof previous != 'undefined') {
              $('.prev-btn').after(previous);
            }
        }).on('mouseleave', function (e) {
          $('.left div').remove();
        });

    });

}(jQuery));
