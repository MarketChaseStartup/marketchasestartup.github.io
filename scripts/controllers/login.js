mkcApp.controller('CtrlLogin',['$scope','$location', function($scope,$location){
    
    $scope.Login = {
        user: '',
        password: '',
        enter: function(){
    		if($scope.Login.testLogin()){
                $location.url('anuncios/lista');
                setTimeout(function(){
                    $('.modal').click();
                },100);
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

}]);

