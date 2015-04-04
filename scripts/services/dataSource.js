mkcApp.factory('FctDataSource',[function(){
	var app = {
		Cidade: {
			list: Colecao.Cidades,
			getByState: function(stateKey){
				stateKey = typeof stateKey === "object" ? stateKey.Key : stateKey;
				return Utils.Moradia.retornarCidade(stateKey);
			}
		},
		Estado: {
			list: Colecao.Estados,
		},
		Logradouro: {
			list: Colecao.tiposLogradouro
		}
	}
	Teste3 = app;
	return app;
}]);