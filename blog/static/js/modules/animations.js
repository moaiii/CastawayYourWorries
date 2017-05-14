/**** 
 *  animations.js 
 */

Castaway.Animations = (function($){

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
        windowBottom = $(window).height() + $(window).scrollTop() - 500;
        
        animationElements.each(function(){
            if(windowBottom > this.getBoundingClientRect().top) {
                $(this).addClass("is-active");
            }
        })
    });

    Animations.prototype = {
        constructor: Animations,
    };

    return Animations;
})(jQuery);
