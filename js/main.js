$(document).ready(function ($) {

    var secondaryNav = $('.c-navigation'),
        contentSection = $('.section-waypoint'),
        secondaryNavTopPosition = secondaryNav.offset().top


    function navigationHandler() {
        if ($(window).scrollTop() > secondaryNavTopPosition) {
            $(secondaryNav).addClass('js-is-fixed');
            setTimeout(function () {
                secondaryNav.addClass('js-animate-children');
            }, 50);
        } else {
            $(secondaryNav).removeClass('js-is-fixed');
            setTimeout(function () {
                secondaryNav.removeClass('js-animate-children');
            }, 50);
        }
        updateSecondaryNavigation();
    };


    //on desktop - update the active link in the secondary fixed navigation
    function updateSecondaryNavigation() {
        contentSection.each(function () {
            var actual = $(this),
                actualHeight = actual.height(),
                actualAnchor = secondaryNav.find('a[href="#' + actual.attr('id') + '"]');
            if ((actual.offset().top - secondaryNav.height() <= $(window).scrollTop()) && (actual.offset().top + actualHeight - secondaryNav.height() > $(window).scrollTop())) {
                actualAnchor.addClass('active');
            } else {
                actualAnchor.removeClass('active');
            }
        }
        )
    }

    //smooth scrolling when clicking on the secondary navigation items 
    function smoothScrolling(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('body,html').animate({
            'scrollTop': target.offset().top - secondaryNav.height() + 1
        }, 400)
    }

    function toggleMobileMenu(event) {
        event.preventDefault();
        $(this).toggleClass('js-menu-is-open');
        secondaryNav.find('ul').toggleClass('js-is-visible');
    }


    $(window).on('scroll', navigationHandler)
    $('.c-navigation__mobile-menu').on('click', toggleMobileMenu)
    secondaryNav.find('ul a').on('click', smoothScrolling)
});