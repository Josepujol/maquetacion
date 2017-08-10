var fullstack = (function($, undefined) {
    "use strict";
    var events, suscribeEvents, beforeCatchDom, catchDom, dom, afterCatchDom, fn, initialize, st;
    st = {
    };
    dom = {};
    beforeCatchDom = function() {
        fn.verificarEcma()
        fn.eliminarParametros()
        var migato = new fn.miGato("Michifu", "azul", 2)
        // alert(migato.color)
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
        miGato: function (nombre, color, edad) {
            this.nombre = new String(nombre);
            this.color = new String(color);
            this.edad = new Number(edad);
            if (isNaN(this.edad)) {
                alert("Error en el data-typing, edad no es un numero");
            }            
        },
        eliminarParametros : function(){
            var d1 = [{"id1": 1,"id3":3},{"id2":2,"id4":4}, {"id3":3,"id5":5}]
            var filter = ["id1","id2"]            
            for(var m in d1){
                // console.log(d1[m])
                for(var n in d1[m]){
                    // console.log(n)
                    for (var l in filter){
                        if( n == filter[l]){
                            delete d1[m][n]
                        }
                    }
                }
            }

             console.log(d1)


           // for(var i= 0 ; i < d1.length; i++){
           //      // console.log(d1[i])
           //      for(var m in filter){
           //          console.log(filter[m])
           //      }

           //  }

        },
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