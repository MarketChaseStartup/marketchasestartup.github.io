mkcApp.factory('FctAnuncio',['FctApi','$location','prompt','FctObjetos',function(FctApi,$location,prompt, FctObjetos){
    
	var app = {
		getAll: function(sucesso, erro){
			FctApi.Anuncio.getAll(function(resp){
				app.list = resp;
				sucesso(resp);
			}, erro);
		},
		getByShop: function(lojaId, sucesso, erro){
			FctApi.Anuncio.findByShop(lojaId,
			function(resp){
				app.list = resp;
				sucesso(resp);
			}, erro);
		},
		post: function(){
			FctApi.Anuncio.save(app.selected.obj,
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
			FctApi.Anuncio.update(app.selected.obj.codigo,app.selected.obj,
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
		del: function(index){
			prompt({
				"message": SystemMessages.question.deleting('anúncio'),
				"buttons": [{ label:'Sim', primary: true, index: index }, { label:'Não', cancel: true}]
			}).then(function(result){
				FctApi.Anuncio.findByShop(app.list[index].codigo,
					function(resp){
						app.list.splice(index,1);
					},
					function(err){
						console.log(err);
					}
				);
			});
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
			if(app.selected.index === -1){
				app.post();
			}else{
				app.update();
			}
		},
		finishUpdate: function(){
			app.selected.reset();
			$location.url('anuncios/lista');
		}
	};

	return app;
}]);