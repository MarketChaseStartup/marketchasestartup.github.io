mkcApp.controller('CtrlAnuncioCadastro',['$scope','FctAnuncio','$location', function($scope,FctAnuncio,$location){

    $scope.Anuncio = FctAnuncio;

    if( $scope.Anuncio.selected.index === -1 ){
        $scope.Anuncio.finishUpdate();
    }

}]);
