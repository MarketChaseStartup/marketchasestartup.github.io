mkcApp.controller('CtrlHeader',['$scope','$location','$modal', function($scope,$location,$modal){
    
    $scope.Modal = {
    	open: function(){
			var modalInstance = $modal.open({
	          templateUrl: 'modalLogin.html',
	          controller: 'CtrlLogin'
	        });
    	}
    };

    $scope.goToRegister = function(){
		$location.url('/cadastro');
    }

}]);

