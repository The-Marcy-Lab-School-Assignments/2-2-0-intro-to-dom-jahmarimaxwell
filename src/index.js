const getMainHeadingText = () => {
    let text = document.querySelector('#main-heading');
    console.log(text.textContent);
}
const getAllMainText = () => {
    let newString = ""
    newString += ',' + document.querySelectorAll('.main-text');
    console.log(newString.textContent);
};

const setSubtitleText = () => {
};

const modifyDivClassList = () => {
};

const addH2 = () => {
};

const removeOldInfo = () => {
};

const makeAlphabet = () => {
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