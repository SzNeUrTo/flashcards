export class VocabEditModalController {
  constructor ($scope, $uibModalInstance, vocab) {
    'ngInject';

    $scope.vocab = _.cloneDeep(vocab);

  	$scope.ok = function () {
  		$uibModalInstance.close($scope.vocab);
  	};

  	$scope.cancel = function () {
  		$uibModalInstance.dismiss('cancel');
  	};
  }

}