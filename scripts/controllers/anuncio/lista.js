mkcApp.controller('CtrlAnuncioLista',['$scope','FctAnuncio', function($scope,FctAnuncio){
    
    $scope.Page = {
        name: 'Anuncio Lista'
    };

    $scope.Anuncio = FctAnuncio;

}]);

