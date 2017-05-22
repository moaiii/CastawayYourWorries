/**** 
 *  init.js 
 */

(function() {

    console.log('Castaway Your Worries javascript launched');

    if ($('.hero').length !== 0) {
        new Castaway.Hero();
    }

})();
