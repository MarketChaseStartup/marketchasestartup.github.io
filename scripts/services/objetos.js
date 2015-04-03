mkcApp.factory('FctObjetos',[function(){

	var that = {
		Anuncio: function(){
			this.codigo;
			this.descricao = "";
			this.caminhoArquivo = "";
			this.nomeArquivo = "";
			this.dataPostagem = "";
			this.dataHoraInicio = "";
			this.dataHoraVencimento = "";
			this.permanente = false;
			this.ativo = true;
			this.tipoAnuncio = "";
			this.categoria = "";
			//Loja
		},
		Cliente: function(){
			this.codigo;
			this.nome = "";
			this.listaContatos = [];
		},
		Contato: function(){
			this.codigo;
			this.descricao = "";
			this.tipoContato = "";
		},
		Endereco: function(){
			this.codigo;
			this.numero = "";
			this.complemento = "";
			this.rua = "";
			this.cep = "";
			this.estado = "";
			this.cidade = "";
			this.referencia = "";
			this.zonaEndereco = "";
			this.listaContatos = [];
		},
		Login: function(){
			this.usuario = "";
			this.senha = "";
		},
		Loja: function(){
			this.codigo;
			this.nome = "";
			this.login = new that.Login();
			this.ativa = true;
			this.listaEndereco = [];
			this.listaAnuncios = [];
		}
	}
    
	var app = {
		Anuncio: function(){
			return new that.Anuncio();
		},
		Cliente: function(){
			return new that.Cliente();
		},
		Contato: function(){
			return new that.Contato();
		},
		Endereco: function(){
			return new that.Endereco();
		},
		Login: function(){
			return new that.Login();
		},
		Loja: function(){
			return new that.Loja();
		}
	};

	return app;
}]);