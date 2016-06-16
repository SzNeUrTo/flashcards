export class VocabEditModalController {
  constructor ($uibModalInstance, $scope, $log, word) {
    'ngInject';

    this.word = word ? _.cloneDeep(word) : {};
    this.$scope = $scope;

  	this.$scope.ok = function () {
  		$uibModalInstance.close(this.word);
  	};

  	this.$scope.cancel = function () {
  		$uibModalInstance.dismiss('cancel');
  	};
  }

}