mkcApp.factory('FctLoja',['FctApi','$location','prompt','FctObjReader',function(FctApi,$location,prompt,FctObjReader){
    
	var app = {
		getAll: function(sucesso, erro){
			FctApi.Loja.getAll(function(resp){
				app.list = resp.listaObjetos;
				sucesso(resp.listaObjetos);
			}, erro);
		},
		post: function(){
			console.warn("MOCK");
			var i = app.selected.obj.listaEnderecos.length;
			while(i--){
				app.selected.obj.listaEnderecos[i].cidade = app.selected.obj.listaEnderecos[i].cidade.Value;
				app.selected.obj.listaEnderecos[i].estado = app.selected.obj.listaEnderecos[i].estado.Value;
				app.selected.obj.listaEnderecos[i].tipoLogradouro = app.selected.obj.listaEnderecos[i].tipoLogradouro.Value;
			}

			
			FctApi.Loja.save(app.selected.obj,
				function(resp){
					app.list.unshift(resp.listaObjetos[0]);
					app.select(0);
					$location.url('anuncios/lista');
					//app.finishUpdate();
				},
				function(err){
					console.log(err);
					app.finishUpdate();
				}
			);
		},
		update: function(){
			console.warn('MOCK');
			app.selected.obj.login = {};
			var i = app.selected.obj.listaEnderecos.length;
			while(i--){
				var endereco = app.selected.obj.listaEnderecos[i];
				endereco.cidade = endereco.cidade.Value ? endereco.cidade.Value : endereco.cidade;
				endereco.estado = endereco.estado.Value ? endereco.estado.Value : endereco.estado;
				endereco.tipoLogradouro = endereco.tipoLogradouro.Value ? endereco.tipoLogradouro.Value : endereco.tipoLogradouro;
			}
			FctApi.Loja.update(app.selected.obj.codigo, app.selected.obj,
				function(resp){
					app.list[app.selected.index] = app.selected.obj;
					//app.finishUpdate();
					$location.url('anuncios/lista');

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
				app.selected.obj = {"login": {}, "ativa": true, "listaEnderecos": []};
				$location.url('cadastro');
			}
			app.setupObject();
		},
		setupObject: function(){
			FctObjReader.Objects.totalRead = [];
			FctObjReader.Objects.ignoreRead = [];
			FctObjReader.Objects.includeRead = [];
			var obj = app.selected.obj;
			var fieldsLoja = app.selected.obj.codigo ? ['nome'] : ['nome','login.usuario','login.senha'];
			var fieldsEndereco =  ['bairro','cep','cidade','complemento','estado','numero','rua','tipoLogradouro','zonaEndereco'];
			var fieldsContato = ['descricao'];
	        var includeRead = [[obj,fieldsLoja]];
	        for(var i = 0; i < obj.listaEnderecos.length; i++){
	        	includeRead.push([obj.listaEnderecos[i],fieldsEndereco]);
	        	obj.listaEnderecos[i].listaContatos = obj.listaEnderecos[i].listaContatos || [];
	        	for(var j = 0; j < obj.listaEnderecos[i].listaContatos.length; j++){
	        		includeRead.push([obj.listaEnderecos[i].listaContatos[j],fieldsContato]);
	        	}
	        }
	                
	        FctObjReader.Objects.includeRead = includeRead;
		},
		save: function(){
			var progresso = FctObjReader.calc();
			if(app.selected.obj.listaEnderecos.length !== 0){
				if(progresso === 1){
					if(app.selected.index === -1){
						app.post();
					}else{
						app.update();
					}
				}else{
					Plugins.Mensagem.alerta('Preencha todos os campos');
				}
			}else{
				Plugins.Mensagem.alerta('O cadastro deve ter pelo menos uma unidade');
			}
		},
		finishUpdate: function(){
			app.selected.reset();
			$location.url('loja/lista');
		}
	};

	return app;
}]);
