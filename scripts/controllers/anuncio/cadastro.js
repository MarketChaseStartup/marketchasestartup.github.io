mkcApp.controller('CtrlAnuncioCadastro',['$scope','FctAnuncio','$location', function($scope,FctAnuncio,$location){

    $scope.Anuncio = FctAnuncio;

    $scope.Categoria = {
    	list: ['ALIMENTOS', 'BRINQUEDOS', 'CALÇADOS', 'ELETRODOMESTICOS', 'ELETRONICOS', 'LAZER', 'MOVEIS', 'VESTUARIO']
    }

}]);
