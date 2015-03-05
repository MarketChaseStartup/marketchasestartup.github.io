var Teste;
mkcApp.factory('FctApi',['$http','$location',function($http,$location){
    var url = 'http://localhost:8080/marketchase/';

    var api = (function(){
    	var tratarErro = function(err,callback,status){
    		if(err && err.exibir){
    			Plugins.Mensagem.erro(err.message);
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
                    data: Controle.EditorTexto.jsonEscape(JSON.stringify(obj)),
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
        composite : (function(){
        	return {
        		get : function(id,sucesso,erro){
        			api.get('composite/'+id,sucesso,erro);
        		},
        		save : function(composite,sucesso,erro){
        			api.post('composite',{composite:composite},sucesso,erro);
        		},
        		del : function(id,sucesso,erro){
        			api.del('composite/'+id,sucesso,erro);
        		},
        		update : function(id, updateField, sucesso, erro){
        			api.put('composite/'+id, {updateField: updateField}, sucesso, erro, true);
        		}
        	}
        })(),
        visibilitySensitivity : (function(){
            return{
                getPerAccidentalDamage : function(id, sucesso, erro){
                    api.get('visibility-sensitivity/get-per-accidental-damage/'+id, sucesso, erro);
                },
                updateField : function(id, updateField, sucesso, erro){
                    api.put('visibility-sensitivity/'+id, {updateField:updateField}, sucesso, erro, true);
                }
            }
        })()
    };Teste = app;
    return app;
}]);