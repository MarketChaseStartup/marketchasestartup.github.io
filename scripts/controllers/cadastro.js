mkcApp.controller('CtrlCadastro',['$scope','FctLoja', function($scope,FctLoja){
    
    $scope.Loja = FctLoja;
    FctLoja.select(0);

    $scope.estados = Colecao.Estados;
    $scope.tipoEmail = Colecao.tiposEmail;
    $scope.tipoTelefone = Colecao.tiposTelefone;
    $scope.tipoLogradouro = Colecao.tiposLogradouro;
    /*$scope.cidades = Utils.Moradia.retornarCidade($scope.Cliente.cliente.endereco.estado.Key);
    $scope.telefone = Objetos.Contato();
    $scope.email = Objetos.Contato();*/

    /******* FUNCOES *******/
    $scope.retornarCidades = function(){
        $scope.cidades = Utils.Moradia.retornarCidade($scope.Cliente.cliente.endereco.estado.Key);
        $scope.Cliente.cliente.Endereco.Cidade = {};
    }


    $scope.setEstadoCidade = function(){
        //Controle.setEstadoCidade($scope);
    }

}]);

