const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka

  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.setAttribute('class', 'item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    var newItem = document.createElement('li');
    newItem.setAttribute('class', 'item');
    const newInput = newItem.createElement('input')
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('class', 'item__checkbox');
    const newSpan = newItem.createElement('span');
    newSpan.setAttribute('class', 'item__text');
    const spanText = document.createTextNode(value);
    newSpan.appendChild(spanText);
    const newButton = newItem.createElement('button');
    newButton.setAttribute('class', 'button');
    const buttonText = document.createTextNode('Eyða');
    newButton.appendChild(buttonText);

    document.body.main.ul.appendChild(newItem); // wot
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
