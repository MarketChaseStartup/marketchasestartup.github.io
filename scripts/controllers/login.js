mkcApp.controller('CtrlLogin',['$scope','$location', 'FctLoja', 'FctAnuncio','$rootScope', function($scope,$location, FctLoja, FctAnuncio,$rootScope){
    
    $scope.Login = {
        user: '',
        password: '',
        enter: function(){
    		if($scope.Login.testLogin()){
    		    $rootScope.login = {username: $scope.Login.user, password: $scope.Login.password}
                Loja.find(function(resp){
                    FctLoja.select(0);
                    Anuncio.findByShop(FctLoja.selected.obj.codigo,function(){
                        $location.url('anuncios/lista');
                        setTimeout(function(){
                            $('.modal').click();
                        },100);
                    });
                });
    		}
        },
        testLogin: function(){
            if($scope.Login.user !== '' && $scope.Login.password !== ''){
                return true;
            }
        	Plugins.Mensagem.alerta("Login Inválido");
        	return false;
        }
    };

    var Loja = {
        find: function(callback){
            FctLoja.getAll(
                function(resp){
                    callback(resp);
                },
                function(err){
                    console.log(err);
                }
            );
        }
    }

    var Anuncio = {
        findByShop: function(shopId, callback){
            FctAnuncio.getByShop(shopId,
                function(resp){
                    callback(resp);
                },
                function(err){
                    console.log(err);
                }
            );
        }
    }

}]);

