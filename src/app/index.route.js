export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('vocablist', {
      url: '/vocablist',
      templateUrl: 'app/vocablist/vocablist.html',
      controller: 'VocabListController',
      controllerAs: 'vocablist'
    });

  $urlRouterProvider.otherwise('/');
}
