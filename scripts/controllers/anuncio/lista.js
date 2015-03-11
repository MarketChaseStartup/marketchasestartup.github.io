mkcApp.controller('CtrlAnuncioLista',['$scope','FctAnuncio', function($scope,FctAnuncio){

    $scope.Anuncio = FctAnuncio;
    
    $scope.Anuncio.selected.reset();

}]);

