$(document).ready(function ($) {

    var secondaryNav = $('.navigation'),
        secondaryNavTopPosition = secondaryNav.offset().top;
    contentSection = $('.section-waypoint')

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > secondaryNavTopPosition) {
            $(secondaryNav).addClass('is-fixed');

            setTimeout(function () {
                secondaryNav.addClass('animate-children');
            }, 50);

        } else {
            $(secondaryNav).removeClass('is-fixed');

            setTimeout(function () {
                secondaryNav.removeClass('animate-children');
            }, 50);
        }

        updateSecondaryNavigation();
    });

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
    secondaryNav.find('ul a').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        console.log(this);

        $('body,html').animate({
            'scrollTop': target.offset().top - secondaryNav.height() + 1
        }, 400)
    })



});