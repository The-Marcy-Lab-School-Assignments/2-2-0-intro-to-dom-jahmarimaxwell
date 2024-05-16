const getMainHeadingText = () => {
  let text = document.querySelector('#main-heading');
  console.log(text.textContent);
}
const getAllMainText = () => {
  let newString = '';
  let mainText = document.querySelectorAll('.main-text')
  let mainTextArray = [...mainText]
  mainTextArray.forEach(mainText => {
    newString += mainText.textContent;
    // do something awesome with each div
  });
  let text = mainText.textContent;
  console.log(newString)
};

const setSubtitleText = () => {
  let text = document.querySelector('#subtitle');
  text.innerHTML = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const list = document.querySelector('#modify-classes').classList;
  list.remove('bad-class')
  list.add('new-class')
};

const addH2 = () => {
  const newH2 = document.createElement('h2');
  newH2.setAttribute("id", "h2-test")
  const text = document.createTextNode("Another one!")
  newH2.appendChild(text);
  document.querySelector('body').append(newH2);
};

const removeOldInfo = () => {
  const pTag = document.getElementById('old-info');
  pTag.remove();
};

const makeAlphabet = () => {
  const Alphabet = document.querySelector('#alphabet')
  const dataSetLength = Alphabet.dataset.numLetters;
  const listItems = createElement('li')
  const letters = ['A', 'B', 'C', 'D', 'E'];



};

const makeBio = () => {
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
