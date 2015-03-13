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

    $scope.Page = {
    	isOnEntrance: function(){
    		var loc = $location.url();
    		if(loc === '/' || loc === '/cadastro'){
				return true;
    		}return false;
    	}
    }

    $scope.Logo = {
    	img : function(){
    		if($scope.Page.isOnEntrance()){
    			return 'images/mkc_logo.png';
    		}return 'images/mkc_logo_icon.png';
    	},
    	url: function(){
    		if($scope.Page.isOnEntrance()){
    			$location.url('/');
    		}else{
				$location.url('/anuncios/lista')
    		}
    	},
    	align: function(){
    		if($scope.Page.isOnEntrance()){
    			return 'logo-left';
    		}else{
				return 'logo-center';
    		}
    	}
    }

}]);

