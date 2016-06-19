export class MainController {
  constructor (AppConstant) {
    'ngInject';

    let ls = JSON.parse(localStorage.getItem('vocablist'));
    this.vocablist = ls ? ls : AppConstant.initialVocabList;
    this.size = this.vocablist.length;
    this.showIndex = 0;
    this.vocab = this.vocablist[this.showIndex];
  }

  next() {
    this.showIndex = (this.showIndex + 1) % this.size;
    this.vocab = this.vocablist[this.showIndex];
  }
}
