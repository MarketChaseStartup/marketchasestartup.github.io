mkcApp.controller('CtrlLogin',['$scope', function($scope){
    
    $scope.Login = {
        user: '',
        password: '',
        enter: function(){
    		if($scope.Login.testLogin()){

    		}
        },
        testLogin: function(){
        	Plugins.Mensagem.alerta("Login Inválido");
        	return false;
        }
    };

}]);

