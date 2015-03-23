mkcApp.factory('FctLoja',['FctApi','$location','prompt',function(FctApi,$location,prompt){
    
	var app = {
		get: function(){

		},
		post: function(){
			app.list.unshift(app.selected.obj);
			app.finishUpdate();
		},
		update: function(){
			app.list[app.selected.index] = app.selected.obj;
			app.finishUpdate();
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
			}
		],
		select: function(index){
			app.selected.index = index;
			app.selected.obj = angular.copy(app.list[index]);
			$location.url('loja/cadastro');
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