import { inherit } from "@uirouter/core";
import { debug } from "util";

export default class CarteiraController {

  constructor(carteiraService, moedaService) {
    var vm = this;
    this.name = 'Carteiras';
    vm.carteiraNome='';
    vm.carteiraSelecionada='';
    vm.messages = "";
    vm.cssMessage = "";
    vm.visibleMessage = false;
    vm.carteira={};
    vm.moeda={
      nome:'',
      carteira:{
        id:''
      }
    };

    buscaTotal();

    function buscaTotal(){
      carteiraService.getCarteiras().then(function abc(resp) {
        vm.carteiras = resp.data;
      });
    }  

    vm.resetarMensagens=function(){
      vm.messages = "";
      vm.cssMessage = "";
      vm.visibleMessage = false;
    };
    
    vm.procurar=function(carteiraNome){  
      if (vm.carteiraNome!=''){
      carteiraService.getCarteirasByNome(carteiraNome).then(function(response){
          vm.carteiras = response.data;
      })}else{
        carteiraService.getCarteiras().then(function abc(resp) {
          vm.carteiras = resp.data;
        });
      }
      vm.resetarMensagens();
      vm.carteiraNome='';
    };    

    vm.excluir=function(carteira){
      carteiraService.deleteCarteira(carteira.id).then(function(response){
        vm.cssMessage = "message-table-correct";
			  vm.messages = "Carteira excluída com sucesso.";
			  vm.visibleMessage = true;
        buscaTotal();
      }).catch(function(response){
        vm.cssMessage = "message-table-incorret";
			  vm.messages = "Erro... Tente novamente mais tarde.";
        vm.visibleMessage = true;
    });
  }

    vm.selecionarCarteira=function(carteira){
      vm.carteiraSelecionada=carteira;
      vm.moeda.carteira.id=vm.carteiraSelecionada.id;
      vm.resetarMensagens();
    };

    vm.atualizarCarteira=function(carteira){
      carteiraService.updateCarteira(carteira).then(function(response){
        vm.cssMessage = "message-table-correct";
			  vm.messages = "Sucesso.";
			  vm.visibleMessage = true;
        buscaTotal();
      }).catch(function(response){
        vm.cssMessage = "message-table-incorret";
			  vm.messages = "Erro... Verifique se já existe esse nome ou tente mais tarde.";
        vm.visibleMessage = true;
        buscaTotal();
      });
    }

    vm.cadastrarCarteira=function(carteira){
      carteiraService.updateCarteira(carteira).then(function(response){
        vm.cssMessage = "message-table-correct";
			  vm.messages = "Carteira cadastrada!";
        vm.visibleMessage = true;
        vm.carteira={};
        buscaTotal();
      }).catch(function(response){
        vm.cssMessage = "message-table-incorret";
			  vm.messages = "Erro... Verifique se já existe esse nome ou tente mais tarde.";
        vm.visibleMessage = true;
        vm.carteira={};
        buscaTotal();
      });
    }

    vm.cadastrarMoeda=function(moeda){
      moedaService.createMoeda(moeda).then(function(response){
        vm.carteiraSelecionada.moedas.push(response.data);
        vm.moeda.nome='';
        vm.cssMessage = "message-table-correct";
			  vm.messages = "Moeda inserida.";
        vm.visibleMessage = true;
        vm.carteira={};
        buscaTotal();
      }).catch(function(response){
        vm.cssMessage = "message-table-incorret";
			  vm.messages = "Erro... Carteira está cheia.";
        vm.visibleMessage = true;
        vm.carteira={};
        buscaTotal();
      });
    }

    vm.atualizarTabela=function(){
      carteiraService.getCarteiras().then(function abc(resp) {
        vm.carteiras = resp.data;
        vm.resetarMensagens();
      });
    }

    vm.excluirMoeda=function(moeda){
      moedaService.deleteMoeda(moeda.id).then(function(response){
        vm.carteiraSelecionada.moedas.splice(vm.carteiraSelecionada.moedas.indexOf(moeda),1);
      })
    }
  }
}
CarteiraController.$inject = ['carteiraService', 'moedaService'];
