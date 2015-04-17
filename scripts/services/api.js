var Teste;
mkcApp.factory('FctApi',['$http','$location',function($http,$location){
    var url = 'http://localhost:8080/marketchase/';

    var api = (function(){
    	var tratarErro = function(err,callback,status){
    		if(status===401){
    		    //location.href= "#";
    		}
    		if(callback){
    			callback(err,status);
    		}
    	};
        var startLoading = function(notLoading){
            if(!notLoading){
                Controle.Loading.start();
            }
        }
        var stopLoading = function(notLoading){
            if(!notLoading){
                Controle.Loading.stop();
            }
        }
        return{
            get : function(endp,sucesso,erro,notLoading){
                startLoading(notLoading);
        		$http({
                    method: 'GET', 
                    url: url+endp,
                    responseType : 'json'
                })
                .success(function(resp,status){
                    sucesso(resp,status);
                    stopLoading(notLoading);
                })
                .error(function(err,status){
                	tratarErro(err,erro,status);
                    stopLoading(notLoading);
                });
            },
            post : function(endp,obj,sucesso,erro,notLoading){
                startLoading(notLoading);
        		$http({
                    method: 'POST', 
                    url: url+endp,
                    data: JSON.stringify(obj),
                    responseType : 'json',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .success(function(resp,status){
                    sucesso(resp,status);
                    stopLoading(notLoading);
                })
                .error(function(err,status){
                    tratarErro(err,erro,status);
                    stopLoading(notLoading);
                });
            },
            put : function(endp, obj, sucesso, erro, notLoading){
                startLoading(notLoading);
        		$http({
                    method: 'PUT', 
                    url: url+endp,
                    data: JSON.stringify(obj),
                    responseType : 'json',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .success(function(resp,status){
                    sucesso(resp,status);
                    stopLoading(notLoading);
                })
                .error(function(err,status){
                    tratarErro(err,erro,status);
                    stopLoading(notLoading);
                });
            },
            del : function(endpId, sucesso, erro, notLoading){
                startLoading(notLoading);
        		$http({
                    method: 'DELETE', 
                    url: url+endpId,
                    responseType : 'json'
                })
                .success(function(resp,status){
                    sucesso(resp,status);
                    stopLoading(notLoading);
                })
                .error(function(err,status){
                    tratarErro(err,erro,status);
                    stopLoading(notLoading);
                });
            }
        }
    })();
    
    
    var app = {
        Anuncio : (function(){
        	return {
        		get : function(id,sucesso,erro){
        			api.get('anuncio/'+id,sucesso,erro);
        		},
                getAll : function(sucesso,erro){
                    api.get('anuncio',sucesso,erro);
                },
                findByShop: function(lojaId,sucesso,erro){
                    api.get('anuncio/loja/' + lojaId,sucesso,erro);
                },
                findByCategory: function(categoriaId,sucesso,erro){
                    api.get('anuncio/categoria/' + categoriaId,sucesso,erro);  
                },
        		save : function(loja,sucesso,erro){
        			api.post('anuncio',loja,sucesso,erro);
        		},
        		del : function(id,sucesso,erro){
        			api.del('anuncio/'+id,sucesso,erro);
        		},
        		update : function(id, loja, sucesso, erro){
        			api.put('anuncio/'+id, loja, sucesso, erro, true);
        		}
        	}
        })(),
        Contato : (function(){
            return {
                save : function(contato,sucesso,erro){
                    api.post('contatos',contato,sucesso,erro);
                },
                del : function(id,sucesso,erro){
                    api.del('contatos/'+id,sucesso,erro);
                },
                update : function(id, contato, sucesso, erro){
                    api.put('contatos/'+id, contato, sucesso, erro, true);
                }
            }
        })(),
        Endereco : (function(){
            return {
                save : function(endereco,sucesso,erro){
                    api.post('enderecos',endereco,sucesso,erro);
                },
                del : function(id,sucesso,erro){
                    api.del('enderecos/'+id,sucesso,erro);
                },
                update : function(id, endereco, sucesso, erro){
                    api.put('enderecos/'+id, endereco, sucesso, erro, true);
                }
            }
        })(),
        Loja : (function(){
            return {
                getAll : function(sucesso,erro){
                    api.get('lojas/',sucesso,erro);
                },
                save : function(loja,sucesso,erro){
                    api.post('lojas',loja,sucesso,erro);
                },
                del : function(id,sucesso,erro){
                    api.del('lojas/'+id,sucesso,erro);
                },
                update : function(id, loja, sucesso, erro){
                    api.put('lojas/'+id, loja, sucesso, erro, true);
                }
            }
        })(),
    };Teste = app;
    return app;
}]);