import angular from 'angular';

class CarteiraService {

    constructor($http) {
        this.$http = $http;
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/carteira";
    }
    
    getCarteiras() {
        return this.$http.get(this.path);
    }

    getCarteirasByNome(nomeCarteira){
        return this.$http.get(this.path+'/nome/'+nomeCarteira);
    }

    deleteCarteira(idCarteira){
        return this.$http.delete(this.path+'/'+idCarteira);
    }

    updateCarteira(carteira){
        return this.$http.put(this.path, carteira);
    }  
    
    createCarteira(carteira){
        return this.$http.post(this.path, carteira);
    } 
}

export default angular.module('services.carteira-service', [])
.service('carteiraService', CarteiraService)
.name;