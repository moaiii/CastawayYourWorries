/**** 
 *  animations.js 
 */

/**** 
 *  Paralax.js 
 */

Castaway.Animations = (function($){

    var Animations = function() {
        return $('.');
    };

    var headings = $('h3');

    $(window).scroll(function() {
        windowBottom = $(window).height() + $(window).scrollTop();

        headings.each(function(i, val) {
            // console.log(val);
        });
    });

    Animations.prototype = {
        constructor: Animations,
    };

    return Animations;
})(jQuery);
