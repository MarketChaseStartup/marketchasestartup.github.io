mkcApp.controller('CtrlAnuncioCadastro',['$scope','FctAnuncio','$location', function($scope,FctAnuncio,$location){

    $scope.Anuncio = FctAnuncio;

    $scope.Categoria = {
    	list: ['ALIMENTOS', 'BRINQUEDOS', 'CALÇADOS', 'ELETRODOMESTICOS', 'ELETRONICOS', 'LAZER', 'MOVEIS', 'VESTUARIO']
    }

    $scope.Editor = {
        abrir: function(arquivos){
            var FR= new FileReader();
            FR.onload = function(e) {
                 var file = e.target.result;
                 if(file.indexOf('data:image')===-1){
                     Plugins.Mensagem.erro('Formato Inválido');
                     return false;
                 }
                 $scope.Editor.imagem = e.target.result;
                 $scope.Editor.editarImagem();
            };       
            FR.readAsDataURL( arquivos );
        },
        fechar: function(){
            $('.image-editor').hide(500);
            $('.resize-image').remove();
            $('.resize-container').remove();
            
        },
        cortarImagem: function(){
            $scope.Editor.imagem = crop();
            $scope.Editor.fechar();
            $scope.Editor.salvarImagem();
        },
        salvarImagem: function(){
            FctAnuncio.selected.obj.caminhoArquivo = $scope.Editor.imagem;
            $('.anuncio-media img').attr('src',$scope.Editor.imagem);
        },
        editarImagem: function(){
            var element = '<img class="resize-image" src="images/picture_field.png" alt="image for resizing">';
            $('.component').append(element);
            $('.resize-image').attr('src',$scope.Editor.imagem);
            resizeableImage($('.resize-image'));
            
            $('.image-editor').show(500);
        },
        imagem: "",
        exibirImagem: function(){
             return FctAnuncio.selected.obj.caminhoArquivo || 'images/picture_field.png'
        }
    }

}]);
