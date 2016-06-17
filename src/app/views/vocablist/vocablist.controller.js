export class VocabListController {
  constructor ($uibModal, AppConstant) {
    'ngInject';

    this.CONST = AppConstant;
    this.$uibModal = $uibModal;
    let ls = localStorage.getItem('vocablist');
    this.vocablist = ls ? JSON.parse(ls) : AppConstant.initialVocabList;
  }

  updateListData() {
    localStorage.setItem('vocablist', JSON.stringify(this.vocablist));
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
          return isNew ? this.CONST.newVocab : vocab;
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
      this.updateListData();
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
    this.updateListData();
  }
}
