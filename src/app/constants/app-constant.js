export default {
  menu: [
    {state: 'home', text: 'Practice'},
    {state: 'vocablist', text: 'Vocab List'}
  ],
  newVocab: {
    show: false,
    word: '',
    translate: '',
    description: '',
    tag: ''
  },
  initialVocabList: [{
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
  }]
}
