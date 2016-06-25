export class MainController {
  constructor (AppConstant) {
    'ngInject';

    let ls = JSON.parse(localStorage.getItem('vocablist'));
    this.vocablist = ls ? ls : AppConstant.initialVocabList;
    this.vocablist = _.filter(this.vocablist, (o) => { return !o.show; });
    this.size = this.vocablist.length;
    this.showIndex = 0;
    this.showWord = this.vocablist[this.showIndex].word;
  }

  next() {
    this.showIndex = (this.showIndex + 1) % this.size;
    this.showWord = this.vocablist[this.showIndex].word;
  }

  translate() {
    let vocab = this.vocablist[this.showIndex];
    this.showWord = `${vocab.word} (${vocab.translate})`;
  }
}
