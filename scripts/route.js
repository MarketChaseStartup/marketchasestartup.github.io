/* configura os templates de acordo com o menu */
mkcApp.config(['$routeProvider','$provide',function ($routeProvider,$provide){
	/* diminui o trabalho de chamar o objeto toda hora */
	var pagina = function(url,template,controle){
		/* como realmente se chama os templates */
		$routeProvider.when('/'+url,{templateUrl:'views/'+template,controller:controle})
                
	}
    $routeProvider.otherwise({
        redirectTo: ''
    });
            
    
    pagina('','main.html','CtrlMain');
    
    pagina('cadastro','cadastro.html','CtrlCadastro');
    pagina('loja/cadastro','cadastro.html','CtrlCadastro');

    pagina('anuncios/lista','anuncio/lista.html','CtrlAnuncioLista');
    pagina('anuncios/cadastro','anuncio/cadastro.html','CtrlAnuncioCadastro');

      
}])