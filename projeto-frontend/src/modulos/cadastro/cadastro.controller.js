export default class CadastroController {
    constructor(carteiraService, moedaService) {
      var vm = this;
      vm.opcao='';
      vm.CarteiraNome='';
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

      vm.cadastrarCarteira=function(carteira){
        carteiraService.createCarteira(carteira).then(function(response){
          vm.cssMessage = "message-table-correct";
          vm.messages = "Carteira inserida com sucesso.";
          vm.visibleMessage = true;
          vm.carteira={};
          buscaTotal();
        }).catch(function(response){
          vm.cssMessage = "message-table-incorret";
          vm.messages = "Erro... Verifique se o nome já está cadastrado ou tente novamente mais tarde.";
          vm.visibleMessage = true;
      });
      }

      vm.cadastrarMoeda=function(opcao, moeda){
        moeda.carteira.id=opcao;
        moedaService.createMoeda(moeda).then(function(response){
          vm.cssMessage = "message-table-correct";
          vm.messages = "Moeda inserida com sucesso.";
          vm.visibleMessage = true;
          vm.moeda={
            nome:'',
            carteira:{
              id:''
            }
          };
          buscaTotal();
        }).catch(function(response){
          vm.cssMessage = "message-table-incorret";
          vm.messages = "Erro... Verifique se atingiu o limite de moedas ou tente novamente mais tarde.";
          vm.visibleMessage = true;
      });
      }

      vm.resetarMensagens=function(){
        vm.messages = "";
        vm.cssMessage = "";
        vm.visibleMessage = false;
      };
  }  
}
CadastroController.$inject = ['carteiraService', 'moedaService'];