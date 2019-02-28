export class BaseComponent {
  constructor({element}) {
    this._element = element;
  }

  show(){
    this._element.hidden = false
  }
  hide(){
    this._element.hidden = true
  }

//Delegate
on(eventName, elementSelector, cb = () => {}) { //noop - empty function
  this._element.addEventListener(eventName, (event) => {
    const delegateTarget = event.target.closest(elementSelector); //css selector
    if (!delegateTarget) {
      return;
    }
    event.delegateTarget = delegateTarget;
   // cb&&cb(); - classic pattern
    cb(event);
  })
}


//custom base event onAdd()
emit(eventName, data) {
  const event = new CustomEvent(eventName, { 'detail': data });
  this._element.dispatchEvent(event);
}

subscribe(eventName, cb = () => {}) {
  this._element.addEventListener(eventName, (event) => {
    cb(event.detail);
  });
}


}