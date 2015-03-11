mkcApp.factory('FctAnuncio',['FctApi','$location','prompt',function(FctApi,$location,prompt){
    
	var app = {
		get: function(){

		},
		post: function(){

		},
		update: function(){
			app.list[app.selected.index] = app.selected.obj;
			app.finishUpdate();
		},
		del: function(index){
			 prompt({
				"message": SystemMessages.question.deleting('anúncio'),
				"buttons": [{ label:'Sim', primary: true, index: index }, { label:'Não', cancel: true}]
			}).then(function(result){
				app.list.splice(index,1);
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
			{
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
			}
		],
		select: function(index){
			app.selected.index = index;
			app.selected.obj = angular.copy(app.list[index]);
			$location.url('anuncios/cadastro');
		},
		finishUpdate: function(){
			app.selected.reset();
			$location.url('anuncios/lista');
		}
	};

	return app;
}]);