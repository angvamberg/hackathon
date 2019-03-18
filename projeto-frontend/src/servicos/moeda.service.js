import angular from 'angular';

class MoedaService {

    constructor($http) {
        this.$http = $http;
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/moeda";
    }

    deleteMoeda(idMoeda){
        return this.$http.delete(this.path+'/'+idMoeda);
    }

    createMoeda(moeda){
        return this.$http.post(this.path, moeda);
    } 
}

export default angular.module('services.moeda-service', [])
.service('moedaService', MoedaService)
.name;