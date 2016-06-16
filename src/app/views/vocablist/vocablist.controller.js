export class VocabListController {
  constructor ($uibModal) {
    'ngInject';

    this.$uibModal = $uibModal;
    this.vocablist = [{
      select: '',
      word: 'Hello',
      translate: '',
      description: '',
      tag: ''
    }];
  }

  modalAddEdit(word) {
    let modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'app/views/vocab-edit-modal/vocab-edit-modal.html',
      controller: 'VocabEditModalController',
      size: 'sm',
      resolve: {
        word: () => {
          return word;
        }
      }
    });

    modalInstance.result.then((updatedVocab) => {
      console.log(updatedVocab);
    }, () => {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  edit(index) {
    this.modalAddEdit(this.vocabList[index]);
  }

  add() {
    this.modalAddEdit(false);
  }

  delete() {
    // confirm angularjs
  }
}
