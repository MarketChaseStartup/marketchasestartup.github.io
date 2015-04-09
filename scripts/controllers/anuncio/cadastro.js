mkcApp.controller('CtrlAnuncioCadastro',['$scope','FctAnuncio','$location', function($scope,FctAnuncio,$location){

    $scope.Anuncio = FctAnuncio;

    $scope.Categoria = {
    	list: ['ALIMENTOS', 'BRINQUEDOS', 'CALÇADOS', 'ELETRODOMESTICOS', 'ELETRONICOS', 'LAZER', 'MOVEIS', 'VESTUARIO']
    }

    $scope.Editor = {
        abrir: function(arquivos){
            var FR= new FileReader();
            FR.onload = function(e) {
                 $scope.Editor.imagem = e.target.result;
                 $('.anuncio-media img').attr('src',$scope.Editor.imagem);
                 $scope.Editor.editarImagem();
            };       
            FR.readAsDataURL( arquivos );
        },
        cortarImagem: function(){

        },
        salvarImagem: function(){
            FctAnuncio.selected.obj.caminhoArquivo = $scope.Editor.imagem;
        },
        editarImagem: function(){
            console.warn('mock');
            $scope.Editor.salvarImagem();
        },
        imagem: "",
        exibirImagem: function(){
             return $scope.Editor.imagem || FctAnuncio.selected.obj.caminhoArquivo || 'images/picture_field.png'
        }
    }

}]);
