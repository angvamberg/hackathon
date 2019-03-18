'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import carteira from './modulos/carteira/carteira.js';
import home from './modulos/home/home.js';
import cadastro from './modulos/cadastro/cadastro.js';

angular
.module('myApp', [
  uirouter,
  blockUI,
  carteira, 
  home,
  cadastro
])
.config(routing);