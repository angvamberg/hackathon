import { inherit } from "@uirouter/core";

export default class CarteiraController {

  constructor(carteiraService) {
    var vm = this;
    this.name = 'Carteira';

    init();

    function init(){
      carteiraService.getCarteiras().then(function abc(resp) {
        vm.carteiras = resp.data;
      });
    }
  }
  
}
CarteiraController.$inject = ['carteiraService'];
