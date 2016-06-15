export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('vocablist', {
      url: '/vocablist',
      templateUrl: 'app/views/vocablist/vocablist.html',
      controller: 'VocabListController',
      controllerAs: 'vocablist'
    });

  $urlRouterProvider.otherwise('/');
}
