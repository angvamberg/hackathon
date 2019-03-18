routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let carteiraState = {
        name: 'carteira',
        url: '/carteira',
        templateUrl: './modulos/carteira/carteira.view.html',
        controller: 'CarteiraController',
        controllerAs: 'vm'
      }
      $stateProvider.state(carteiraState);

      let cadastroState = {
        name: 'cadastro',
        url: '/cadastro',
        templateUrl: './modulos/cadastro/cadastro.view.html',
        controller: 'CadastroController',
        controllerAs: 'vm'
      }
      $stateProvider.state(cadastroState);
      
      $urlRouterProvider.otherwise('/home')  
}