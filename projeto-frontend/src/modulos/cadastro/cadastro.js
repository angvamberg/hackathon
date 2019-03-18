import angular from 'angular';
import uirouter from 'angular-ui-router';

import CadastroController from './cadastro.controller';

export default angular.module('myApp.cadastro', [uirouter])
  .controller('CadastroController', CadastroController)
  .name;