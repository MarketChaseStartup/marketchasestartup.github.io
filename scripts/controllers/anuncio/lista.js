mkcApp.controller('CtrlAnuncioLista',['$scope','FctAnuncio','FctLoja', function($scope,FctAnuncio,FctLoja){

    $scope.Anuncio = FctAnuncio;
    
    $scope.Anuncio.selected.reset();

}]);

