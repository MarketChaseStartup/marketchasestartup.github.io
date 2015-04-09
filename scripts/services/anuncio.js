mkcApp.factory('FctAnuncio',['FctApi','$location','prompt','FctLoja',function(FctApi,$location,prompt, FctLoja){
    
	var app = {
		getAll: function(sucesso, erro){
			FctApi.Anuncio.getAll(function(resp){
				app.list = resp;
				app.setDate();
				sucesso(resp);
			}, erro);
		},
		getByShop: function(lojaId, sucesso, erro){
			FctApi.Anuncio.findByShop(lojaId,
			function(resp){
				app.list = resp;
				app.setDate();
				sucesso(resp);
			}, erro);
		},
		post: function(){
			FctApi.Anuncio.save(app.selected.obj,
				function(resp){
					app.selected.obj.codigo = resp;
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
			FctApi.Anuncio.update(app.selected.obj.codigo,app.selected.obj,
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
		del: function(index){
			/*prompt({
				"message": SystemMessages.question.deleting('anúncio'),
				"buttons": [{ label:'Sim', primary: true, index: index }, { label:'Não', cancel: true}]
			}).then(function(result){*/
				FctApi.Anuncio.del(app.list[index].codigo,
					function(resp){
						//app.list.splice(index,1);
						app.list[index].ativo = !app.list[index].ativo;
					},
					function(err){
						console.log(err);
					}
				);
			//});
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
				descricao: "doifjasisiidjfasidfiosjafiojsadoifjasisiidjfasidjiisijsfasjfsiajiosfasdfasdfasdasjfoijfaiosjdfiosjafiojsadoifjasisiidjfasidjiisijsfasjfsiajiosfasdfasdfasdasjfoijfaiosjdfiosjafiojsadoifjasisiidjfasidjdfiosjafiojsadoifjasisiidjfasidjiisijsfasjfsiajiosf",
				data: '2015-05-07',
				vencimento: '2015-05-17',
				categoria: 'Roupas',
				imagem: ''
			},
			{
				descricao: "asdf asdf asdf",
				data: '2015-05-07',
				vencimento: '2015-05-17',
				categoria: 'Roupas',
				imagem: ''
			},
			{
				descricao: "asdf asdf asdf",
				data: '2015-05-07',
				vencimento: '2015-05-17',
				categoria: 'Roupas',
				imagem: ''
			}*/
		],
		select: function(index){
			app.selected.index = index;
			app.selected.obj = angular.copy(app.list[index]);
			$location.url('anuncios/cadastro');
		},
		save: function(){
			var anuncio = app.selected.obj;
			anuncio.loja = {codigo : FctLoja.selected.obj.codigo};
			if(app.selected.index === -1){
				console.warn("MOCK");
				anuncio.ativo = true;
				anuncio.caminhoArquivo = anuncio.caminhoArquivo || "sad";
				anuncio.nomeArquivo = "fdsa";
				anuncio.tipoAnuncio = "PNG";
				anuncio.permanente = false;
				anuncio.dataHoraInicio = new Date(anuncio.dataHoraInicio);
				anuncio.dataHoraVencimento = new Date(anuncio.dataHoraVencimento);
				anuncio.dataPostagem = new Date();
				app.post();
			}else{
				app.update();
			}
		},
		finishUpdate: function(){
			app.selected.reset();
			$location.url('anuncios/lista');
		},
		setDate: function(){
			var counter = app.list.length;
			while(counter--){
				app.list[counter].dataHoraInicio = (new Date(app.list[counter].dataHoraInicio)).toJSON().substring(0,10);
				app.list[counter].dataHoraVencimento = (new Date(app.list[counter].dataHoraVencimento)).toJSON().substring(0,10);
			}
		}
	};

	return app;
}]);