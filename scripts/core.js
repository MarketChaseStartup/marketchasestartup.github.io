var mkcApp = angular.module('mkcApp',['ngRoute','ngAnimate','ui.bootstrap','ngSanitize','ui.select','ngTagsInput','ui.sortable',
'angularFileUpload','autocomplete','ui.utils','ngCleanMask','monospaced.elastic','angularjs-dropdown-multiselect','cgPrompt'/*,'ngMockE2E'*/]);



mkcApp.run(['$rootScope','$location', '$templateCache','FctLoja',
function($rootScope,$location, $templateCache, FctLoja) {


     $rootScope.$on('$routeChangeStart', function(event, next, current) {
        
    });


    
    $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
        if(FctLoja.selected.index === -1){
            if(location.hash!="#/cadastro" && location.hash!="#/" && location.hash!=""){
               location.href = "#/";
            }
        }
    });
    
}]);
