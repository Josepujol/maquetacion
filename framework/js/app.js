var fullstack = (function($, undefined) {
    "use strict";
    var events, suscribeEvents, beforeCatchDom, catchDom, dom, afterCatchDom, fn, initialize, st;
    st = {
    };
    dom = {};
    beforeCatchDom = function() {
        fn.verificarEcma()
    };
    catchDom = function() {
    };
    afterCatchDom = function() {
    };
    suscribeEvents = function() {
    };
    events = {
    };
    fn = {
        
        verificarEcma: function(){
            var ES1 = !!(Array.prototype && Array.prototype.join),
            ES3     = !!(Array.prototype && Array.prototype.pop),
            ES51    = (function() {'use strict'; return !this; })(),
            ES6     = !!Object.assign,
            ES7     = !!(Array.prototype && Array.prototype.includes);

            if(ES7){
                console.log('Tu navegador contiene características mínimas de ECMAScript 7');
            }else if(ES6){
                console.log('Tu navegador contiene características mínimas de ECMAScript 6');
            }else if(ES51){
                console.log('Tu navegador tiene soporte para ECMAScript 5.1');
            }else if(ES3){
                console.log('Tu navegador contiene características de ECMAScript 3');
            }else if(ES1){
                console.log('Tu navegador contiene características de ECMAScript 1');
            }else{
                console.log('Tu navegador contiene características de ECMAScript desconocida');
            }
        }
    };
    initialize = function() {
        beforeCatchDom();
        catchDom();
        afterCatchDom();
        suscribeEvents();
    };
    return {
        init: initialize
    };
})(jQuery);
fullstack.init();