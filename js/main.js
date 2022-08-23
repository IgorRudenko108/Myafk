$(function () {
  if ($('.catalog').length) {
    const $header = $('.header');
    const $line = $('.letter-line');

    let lineTop = $('.letter-line').offset().top;

    function setLine() {
      $line.css({
        top: `${$header.height() + 40}px`,
      });
      lineTop = $('.letter-line').offset().top;

      $('.main').css({
        paddingTop: `${lineTop + $line.height() + 50}px`,
      });
    }
    setLine();

    const scrollPosition = () => window.pageYOffset;
    $(window).on('scroll', function () {
      if (scrollPosition() >= lineTop) {
        $line.addClass('scrolled');
      } else {
        $line.removeClass('scrolled');
      }
    });

    $('.letter-line__item').on('click', function (e) {
      e.preventDefault();
      const sectionID = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(sectionID).offset().top - 80,
        },
        {
          duration: 300,
        },
      );
    });
    
  } else if ($('.games-page').length) {
    $('.games-search__select').customSelect();
    $('.user-popup__select').customSelect();
    $('.games-search__seller-toggler').on('click', function (e) {
      $(this).toggleClass('active');
    });
    $('.games-offers__head-item').on('click', function () {
      $(this).toggleClass('active');
    });
    $('.games-search__filters');

    $('.games-search__filters').on('click', () => $('.games-filter-mobile').addClass('opened'));
    $('.header-mobile__close').on('click', () => $('.games-filter-mobile').removeClass('opened'));
  
  
  } else if ($('.lk-page').length) {
    $('.games-search__select').customSelect();
    $('.lk-main__item-toggler').on('click', function (e) {
      $(this).toggleClass('active');
      $(this).parent().siblings().slideToggle(300);
      // $(this).parent('.lk-main__item').children('.lk-main__item-more').slideToggle();
    });
  }
  $('.login__form-checkbox').on('click', function () {
    $(this).toggleClass('false');
  });
  $('.categories__item-type span, .games-filter__select span').on('click', function () {
    $(this).parent().children('span').removeClass('active');
    $(this).addClass('active');
  });
  $('.games-filter__box a').on('click', function () {
    $(this).parent().children('a').removeClass('active');
    $(this).addClass('active');
  });
  $('.lk-pagination .lk-pagination__item').on('click', function (e) {
    e.preventDefault();
    $(this).parent().children('a').removeClass('active');
    $(this).addClass('active');
  });


  function setLoginedUserMenu() {
    const $userLogined = $('.header__user--logined');
    const { top, left } = $userLogined.offset();
    $('.header-logined').css({
      left: `${left - $userLogined.width() + 60}px`,
      top: `${top + $userLogined.height() + 10}px`,
    });
  }
  $('.header__burger').on('click', () => $('.header-mobile').addClass('opened'));
  $('.header-mobile__close').on('click', () => $('.header-mobile').removeClass('opened'));

  $('.sidebar-mobile').on('click', () => $('.aside-mobile').addClass('opened'));
  $('.sidebar-mobile__close').on('click', () => $('.aside-mobile').removeClass('opened'));


  $('.header__search-mobile').on('click', () => $('.search-mobile').addClass('opened'));
  $('.search-mobile button').on('click', () => $('.search-mobile').removeClass('opened'));

  $('.header__user-avatar').on('click', (e) => {
    e.preventDefault();
    $('.header-logined').toggleClass('opened');
  });

  $('.header__user-help').on('click', (e) => {
    e.preventDefault();
    $('.header-help').toggleClass('opened');
    $('.header__user-help--toggler').toggleClass('rotate');
  });

  $('.footer__user-help').on('click', (e) => {
    e.preventDefault();
    $('.footer-help').toggleClass('opened');
    $('.footer__user-help--toggler').toggleClass('rotate');
  });

  $('.like-box').on('click', function () {
    $(this).toggleClass('active');
  });
  

  windowWidthListener([setLoginedUserMenu]);
  function windowWidthListener(items = []) {
    const activateFunctions = (e, t) => items.forEach((item) => item(e, t));

    ['load', 'resize', 'orientationchange'].forEach((event) => {
      $(window).on(event, function (e) {
        console.log();
        activateFunctions(e, this);
      });
    });
  }

  const header = $('.main');
  const scrollPosition = () => window.pageYOffset;

  const documentWidth = parseInt(document.documentElement.clientWidth);
  const windowsWidth = parseInt(window.innerWidth);

  const scrollbarWidth = windowsWidth - documentWidth;
  const $city = $('.city');

  if ($('.has-modal').length) {
    $('.open-popup').magnificPopup({
      type: 'inline',
      showCloseBtn: false,
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect');
        },
      },
      open: function () {
        header.css({ right: `${scrollbarWidth + 1}px`, transition: '0s' });
      },
      close: function () {
        header.css({ right: 0 });
      },
      afterClose: function () {
        header.css({ transition: 'all .3s' });
      },
      midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.close-popup').on('click', () => $('.open-popup').magnificPopup('close'));
  }
});

















