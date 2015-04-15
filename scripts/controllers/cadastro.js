mkcApp.controller('CtrlCadastro',['$scope','FctLoja', 'FctDataSource','$timeout','FctObjetos', function($scope,FctLoja, FctDataSource, $timeout, FctObjetos){
    
    $scope.Loja = FctLoja;
    FctLoja.select(0);

    $scope.listaCidades = [];

    $scope.estados = Colecao.Estados;
    $scope.tipoLogradouro = Colecao.tiposLogradouro;
    /*$scope.cidades = Utils.Moradia.retornarCidade($scope.Cliente.cliente.endereco.estado.Key);
    $scope.telefone = Objetos.Contato();
    $scope.email = Objetos.Contato();*/

    /******* FUNCOES *******/
    $scope.retornarCidades = function(index, state){
        $scope.listaCidades[index] = Utils.Moradia.retornarCidade((state || $scope.Loja.selected.obj.listaEnderecos[index].estado.Key));
        if(!state){
            $scope.Loja.selected.obj.listaEnderecos[index].cidade = "";
        }
    }


    $scope.setEstadoCidade = function(){
        //Controle.setEstadoCidade($scope);
    }


    var initCities = function(){
        if($scope.Loja.selected.index === -1){
            return false;
        }
        var cities = $scope.Loja.selected.obj.listaEnderecos.length;
        while(cities--){
            var state = Utils.Moradia.estadoKey($scope.Loja.selected.obj.listaEnderecos[cities].estado);
            $scope.retornarCidades(cities, state);
        }
    }

    $timeout(function(){
        initCities();
    },1000);
    

    $scope.Cadastro = {
        novoEndereco: function(){
            if(!$scope.Loja.selected.obj.listaEnderecos){
                $scope.Loja.selected.obj.listaEnderecos = [];
            }
            $scope.Loja.selected.obj.listaEnderecos.unshift(FctObjetos.Endereco());
            FctLoja.setupObject();
        },
        removerEndereco: function(index){
            $scope.Loja.selected.obj.listaEnderecos.splice(index,1);
            FctLoja.setupObject();
        },
        novoContato: function(index, tipo){
            var valueField = (tipo === "TELEFONE" ? $('#tel'+index) : $('#email'+index));
            if(valueField.val() != ""){
                var contato = {tipoContato: tipo, descricao: valueField.val()};
                valueField.val('');
                FctLoja.selected.obj.listaEnderecos[index].listaContatos.push(contato);
                FctLoja.setupObject();                
            }else{
                Plugins.Mensagem.alerta('Preencha o campo de ' + (tipo==="TELEFONE" ? "telefone" : "email"))
            }

        },
        removerContato: function(endereco, contatoIndex){
            endereco.listaContatos.splice(contatoIndex,1);
            FctLoja.setupObject();
        }
    }


}]);

