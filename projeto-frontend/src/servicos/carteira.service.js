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
}

export default angular.module('services.carteira-service', [])
.service('carteiraService', CarteiraService)
.name;