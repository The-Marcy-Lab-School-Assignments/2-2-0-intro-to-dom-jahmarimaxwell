const getMainHeadingText = () => {
  let text = document.querySelector('#main-heading').textContent;
  console.log(text);
}

const getAllMainText = () => {
  let newString = "";
  let mainText = document.querySelectorAll('.main-text');
  const values = [];
  // pushes values of mainText into values array
  for (let i = 0; i < mainText.length; i++) {
    values.push(mainText[i].textContent);
  }
  // assigns converted values array to the newString variable
  newString = values.toString();

  console.log(newString);

};

const setSubtitleText = () => {
  let text = document.querySelector('#subtitle');
  text.innerHTML = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const list = document.querySelector('#modify-classes').classList;
  list.remove('bad-class');
  list.add('new-class');
};

const addH2 = () => {
  const newH2 = document.createElement('h2');
  newH2.setAttribute("id", "h2-test");
  const text = document.createTextNode("Another one!")
  newH2.appendChild(text);
  document.querySelector('body').append(newH2);
};

const removeOldInfo = () => {
  const pTag = document.getElementById('old-info');
  pTag.remove();
};

const makeAlphabet = () => {
  const Alphabet = document.getElementById('alphabet');
  const dataSetLength = Alphabet.dataset.numLetters;
  Alphabet.children.length = parseInt(dataSetLength);
  // splits letters into an array
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  // start for loop that iterates through dataset
  for (let i = 0; i < dataSetLength; i++) {
    // iterates through Alphabet element adding list items and text at the 
    // same time
    const listItems = document.createElement('li');
    Alphabet.appendChild(listItems);
    const listItemText = document.createTextNode(`${letters[i]} is letter #${i + 1} in the alphabet`);
    listItems.appendChild(listItemText);
  };
}

const makeBio = () => {
  const myBio = document.querySelector('#my-bio');
  // const myBioInner = myBio.innerHTML;
  const snippet = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
  myBio.innerHTML = snippet;
  ;
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
