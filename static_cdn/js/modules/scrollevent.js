/**** 
 *  ScrollEvent.js 
 */

Castaway.Hero = (function($){

    var Hero = function() {
        return $('.hero');
    };


    /**
     * Variables
     */
    var hero = $('.hero');
    var heroImage = $('.hero__image');
    var heroHeight = hero.height();
    var windowTop;
    var opacity;
    var heroScale;
    var nav = $('.nav');
    var share = $('.social__button');
    var location = $('.header__title');


    /**
     * Scroll event
     */
    $(window).scroll(function() {
        windowTop = $(window).scrollTop();
        opacity = (1 - (windowTop / (heroHeight - 75)));
        scale = 1.1 + (0.1 * opacity);
        hero.css('opacity', opacity);
        heroImage.css({
            '-webkit-transform' : 'scale(' + scale + ')',
            '-moz-transform'    : 'scale(' + scale + ')',
            '-ms-transform'     : 'scale(' + scale + ')',
            '-o-transform'      : 'scale(' + scale + ')',
            'transform'         : 'scale(' + scale + ')'
        });

        /**
         * Add the small underline on the location 
         * when the window passes 100px
         */
        if(windowTop > 100) {
            _addLocationActive();
        } else if (windowTop < 100) {
            _removeLocationActive();
        }


        /**
         * Add the nav bar and social share  
         * when the window passes the hero
         */
        if (windowTop > heroHeight + 50) {
            _addStickyNav();
            _addStickySharebar();
        } else if (windowTop < heroHeight) {
            _removeStickyNav();
            _removeStickySharebar();
        }
    });


    /**
     * Adds a class to an HTML element
     */
    var _addStickyNav = function() {
        nav.addClass('is-sticky');
    };

    var _addStickySharebar = function() {
        share.each(function(){
            this.classList.add('is-sticky');
        });
    };

    var _addLocationActive = function() {
        location.addClass('is-active');
    };


    /**
     * Removes a class to an HTML element
     */
    var _removeStickyNav = function() {
        nav.removeClass('is-sticky');
    };

    var _removeStickySharebar = function() {
        share.each(function(){
            this.classList.remove('is-sticky');
        });
    };

    var _removeLocationActive = function() {
        location.removeClass('is-active');
    };


    /**
     * Constructor
     */
    Hero.prototype = {
        constructor: Hero,
    };

    return Hero;
})(jQuery);
