const HelloWorldAndP = () => {
    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    h1.setAttribute("id", "main-heading");
    const text = document.createTextNode("Hello World!");

    const p = document.createElement('p');
    p.setAttribute("id", "main-text");
    p.setAttribute("class", "boring-text");
    const pText = document.createTextNode("Look, I'm some text!");

    body.appendChild(h1);
    body.appendChild(p);
    h1.appendChild(text);
    p.appendChild(pText);
}
HelloWorldAndP();