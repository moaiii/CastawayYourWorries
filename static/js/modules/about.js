/**** 
 *  about.js 
 */

Castaway.About = (function($) {

    var About = function() {
        return $('.');
    };

    var aboutContainer = $('#js-nav-container');
    var buttonOpen = $('#js-nav-open');
    var buttonClose = $('#js-nav-close');
    var aboutHeader = $('.nav__headline--about');
    var aboutText = $('.nav__text--about');

    buttonOpen.on('click', function() {
        aboutContainer.addClass('is-active');
        aboutHeader.addClass('is-active');
        aboutText.addClass('is-active');
        buttonClose.addClass('is-active');

        /**
         * prevent scrolling when the about pop-up is open
         */
        if (window.addEventListener)
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault;
        window.onmousewheel = document.onmousewheel = preventDefault;
        window.ontouchmove  = preventDefault;
        document.onkeydown  = preventDefaultForScrollKeys;
    });

     buttonClose.on('click', function() {
        aboutContainer.removeClass('is-active');
        aboutHeader.removeClass('is-active');
        aboutText.removeClass('is-active');
        buttonClose.removeClass('is-active');  
    });

    About.prototype = {
        constructor: About,
    };

    return About;
})(jQuery);
