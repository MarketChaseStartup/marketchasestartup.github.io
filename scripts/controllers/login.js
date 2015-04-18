mkcApp.controller('CtrlLogin',['$scope','$location', 'FctLoja', 'FctAnuncio','$rootScope','FctApi', function($scope,$location, FctLoja, FctAnuncio,$rootScope,FctApi){
    
    $scope.Login = {
        user: '',
        password: '',
        enter: function(){
    		if($scope.Login.testLogin()){
				$rootScope.login = {username: $scope.Login.user, password: $scope.Login.password}
				FctApi.Login.login(
					function(idLoja){
						Loja.find(idLoja,function(resp){
							FctLoja.select(0);
							Anuncio.findByShop(FctLoja.selected.obj.codigo,function(){
								$location.url('anuncios/lista');
								setTimeout(function(){
									$('.modal').click();
								},100);
							});
						});
					},
					function(){
						Plugins.Mensagem.alerta("Login Inválido");
					}
				);
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
        find: function(idLoja,callback){
					
            FctLoja.get(idLoja,
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

