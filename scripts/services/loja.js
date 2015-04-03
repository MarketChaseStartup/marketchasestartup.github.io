mkcApp.factory('FctLoja',['FctApi','$location','prompt',function(FctApi,$location,prompt){
    
	var app = {
		getAll: function(sucesso, erro){
			FctApi.Loja.getAll(function(resp){
				app.list = resp.listaObjetos;
				sucesso(resp.listaObjetos);
			}, erro);
		},
		post: function(){
			FctApi.Loja.save(app.selected.obj,
				function(resp){
					app.list.unshift(app.selected.obj);
					app.finishUpdate();
				},
				function(err){
					console.log(err);
					app.finishUpdate();
				}
			);
		},
		update: function(){
			FctApi.Loja.update(app.selected.obj.codigo, app.selected.obj,
				function(resp){
					app.list[app.selected.index] = app.selected.obj;
					app.finishUpdate();
				},
				function(err){
					console.log(err);
					app.finishUpdate();
				}
			);
		},
		selected:{
			index: -1,
			obj: {},
			reset: function(){
				app.selected.index = -1;
				app.selected.obj = {};
			}
		},
		list: [
			/*{
				codigo: 1,
				nome: "Loja de Esportivos",
				ativa: true,
				login: {
					login: "loja1",
					senha: ""
				},
				listaEnderecos: [
					{
						codigo: 1,
						numero: "255",
						complemento: "",
						rua: "ABCD",
						tipoLogradouro: "Rua",
						zona: "urbana",
						bairro: "FGHI",
						cep: "12345-678",
						estado: "São Paulo",
						cidade: "Lorena",
						referencia: "Ao sul do norte canhoto da direita",
						listaContato: [
							{
								codigo: 1,
								descricao: "(12) 34567-8901",
								tipoContato: "TELEFONE"
							},
							{
								codigo: 2,
								descricao: "contato@loja.com",
								tipoContato: "EMAIL"
							}
						]
					}
				]
			}*/
		],
		select: function(index){
			if(app.list.length){
				app.selected.index = index;
				app.selected.obj = angular.copy(app.list[index]);
				$location.url('loja/cadastro');
			}else{
				app.selected.index = -1;
				app.selected.obj = {"login": {}, "ativa": true, "listaEndereco": []};
				$location.url('cadastro');
			}
		},
		save: function(){
			if(app.selected.index === -1){
				app.post();
			}else{
				app.update();
			}
		},
		finishUpdate: function(){
			app.selected.reset();
			$location.url('loja/lista');
		}
	};

	return app;
}]);