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
    buttons = document.getElementsByClassName("item__button");
    for (i=0; i<buttons.length; i++) {
      buttons[i].addEventListener('click', deleteItem);
    }
    texts = document.getElementsByClassName("item__text");
    for (i=0; i<buttons.length; i++) {
      texts[i].addEventListener('click', edit);
      texts[i].addEventListener('keydown', commit);
    }
    boxes = document.getElementsByClassName("item__checkbox");
    for (i=0; i<boxes.length; i++) {
      boxes[i].addEventListener('click', finish);
    }
  }

  function formHandler(e) {
    e.preventDefault();
    task = document.querySelector('.form__input').value;
    add(task);
    document.querySelector('.form__input').value = "";
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    this.parentNode.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    this.removeEventListener('click', edit);
    task = this.parentNode.querySelector('.item__text').textContent;
    const changeTask = document.createElement('input');
    changeTask.setAttribute('type', 'text');
    changeTask.setAttribute('class', 'item__edit')
    changeTask.value = task;
    this.parentNode.querySelector('.item__text').style.display = 'none';
    this.parentNode.querySelector('.item__button').style.display = 'none';
    this.parentNode.appendChild(changeTask);
    changeTask.focus();
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) { //verkar á span item__text undir li item
    if (e.keyCode == ENTER_KEYCODE) {
      task = this.value;
      this.parentNode.querySelector('.item__edit').remove();
      this.parentNode.querySelector('.item__text').textContent = task;
      this.parentNode.querySelector('.item__text').style.display = 'block';
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const newItem = document.createElement('li');
    newItem.setAttribute('class', 'item');
    const newInput = document.createElement('input')
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('class', 'item__checkbox');
    newItem.appendChild(newInput);
    newInput.addEventListener('click', finish);
    const newSpan = document.createElement('span');
    newSpan.setAttribute('class', 'item__text');
    newItem.appendChild(newSpan);
    const spanText = document.createTextNode(value);
    newSpan.appendChild(spanText);
    newSpan.addEventListener('click', edit);
    newSpan.addEventListener('keyup', commit);
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'item__button');
    newItem.appendChild(newButton);
    const buttonText = document.createTextNode('Eyða');
    newButton.appendChild(buttonText);
    newButton.addEventListener('click', deleteItem);

    items.appendChild(newItem); // wot
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
