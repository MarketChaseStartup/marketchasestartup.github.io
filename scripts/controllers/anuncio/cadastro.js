mkcApp.controller('CtrlAnuncioCadastro',['$scope','FctAnuncio', function($scope,FctAnuncio){
    
    $scope.Page = {
        name: 'Anuncio Cadastro'
    };

    $scope.Anuncio = FctAnuncio;


}]);

