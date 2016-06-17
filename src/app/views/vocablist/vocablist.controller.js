export class VocabListController {
  constructor ($uibModal) {
    'ngInject';

    this.$uibModal = $uibModal;
    this.vocablist = [{
      show: true,
      word: 'Hello',
      translate: '',
      description: '',
      tag: ''
    },
    {
      show: false,
      word: 'World',
      translate: '',
      description: '',
      tag: ''
    }];
  }

  modalAddEdit(index, isNew) {
    let vocab = this.vocablist[index];
    let modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'app/views/vocab-edit-modal/vocab-edit-modal.html',
      controller: 'VocabEditModalController',
      size: 'sm',
      resolve: {
        vocab: () => {
          return isNew ? {} : vocab;
        }
      }
    });

    modalInstance.result.then((updatedVocab) => {
      if (isNew) {
        this.vocablist.push(updatedVocab);
      }
      else {
        this.vocablist[index] = updatedVocab;
      }
    }, () => {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  edit(index) {
    this.modalAddEdit(index, false);
  }

  add() {
    this.modalAddEdit(null, true);
  }

  delete(index) {
    _.pullAt(this.vocablist, [index]);
  }
}
