import angular from 'angular';
import uirouter from 'angular-ui-router';

import CarteiraController from './carteira.controller';

import carteiraService from '../../servicos/carteira.service';

export default angular.module('myApp.carteira', [uirouter, carteiraService])
  .controller('CarteiraController', CarteiraController)
  .name;

  