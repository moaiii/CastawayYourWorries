/**** 
 *  base.js 
 */

var Castaway = Castaway || {};

/**** 
 *  about.js 
 */

Castaway.About = (function($) {

    var About = function() {
        return $('.');
    };

    var aboutContainer = $('#js-nav-container');
    var buttonOpen = $('#js-about-open');
    var buttonClose = $('#js-nav-close');
    var aboutHeader = $('.nav__headline--about');
    var aboutText = $('.nav__text--about');

    buttonOpen.on('click', function() {
        aboutContainer.addClass('.is-active');
        aboutHeader.addClass('.is-active');
        aboutText.addClass('.is-active');
        buttonClose.addClass('.is-active');
    });

     buttonClose.on('click', function() {
        aboutContainer.removeClass('.is-active');
        aboutHeader.removeClass('.is-active');
        aboutText.removeClass('.is-active');
        buttonClose.removeClass('.is-active');  
    });

    About.prototype = {
        constructor: About,
    };

    return About;
})(jQuery);

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

/**** 
 *  animations.js 
 */

Castaway.Animations = (function($) {

    var Animations = function() {
        return $('.');
    };

    /**
     * Array with all article elements to be animated
     * when the bottom of screen hits the elements top
     * */
    var headings = $('.post-body h3');
    var paragraphs = $('.post-body p');
    var animationElements = $.makeArray(headings, paragraphs);

    /**
     * Check to see if element is shown and pass '.is-active' class
     * thus animating the element
     */
    $(window).scroll(function() {
        windowBottom = $(window).height() + $(window).scrollTop();
        
        animationElements.each(function(){
            if(windowBottom > this.getBoundingClientRect().top + 500) {
                $(this).addClass("is-active");
            }
        })
    });

    Animations.prototype = {
        constructor: Animations,
    };

    return Animations;
})(jQuery);

/**** 
 *  init.js 
 */

(function() {

    console.log('Castaway Your Worries javascript launched');

    if ($('.hero').length !== 0) {
        new Castaway.Hero();
    }

})();
