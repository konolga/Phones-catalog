import { BaseComponent } from '../../common/components/base/base.component.js';

export class PhonesCatalogComponent extends BaseComponent {
  constructor({ element, phones }) {
    super({ element });
    
    this.on('click', '.phone-link', (event)=>{
      const liElement = event.target.closest('.thumbnail');
      // this.onPhoneSelect(liElement.dataset.id);
      this.emit('phone-select', liElement.dataset.id);
    });
  
    this.on('click', '.add-to-cart', (event)=>{
      const liElement = event.target.closest('.thumbnail');
     // this.onAdd(liElement.dataset.id);
      this.emit('add', liElement.dataset.id);
    });
  }

show(phones){
  this.phones = phones;
  this._render();
  super.show();
}
  _render() {
    this._element.innerHTML = `
    this is PhonesCatalogComponent
    <ul class="phones">
    ${this.phones.reduce((html, phone) => {
return `${html}     <li class="thumbnail" data-id=${phone.id}>
    <a href="#/phones/${phone.id}" class="thumb phone-link">
      <img alt=${phone.id} src=${`assets/${phone.imageUrl}`}>
    </a>
    <div class="phones__btn-buy-wrapper">
      <a class="btn btn-success add-to-cart">
        Add
      </a>
    </div>
    <a href="#/phones/${phone.id}" class="phone-link">${phone.name}</a>
    <p>${phone.snippet}</p>
  </li>`;
}, '')}

</ul>
`;
 }
}

  //version 1 - using callbacks
  // this.onPhoneSelect = onPhoneSelect;
  // this.onAddSelect = onAddSelect;
  //this._element.addEventListener('click', this._handleClick.bind(this));

/*   _handleClick( event ) {
    const btnElement = event.target.closest('.phones__btn-buy-wrapper');
    const liElement = event.target.closest('.thumbnail');
   
    if (event.target===btnElement) this.onAddSelect(liElement.dataset.id);
    if(event.target===liElement) this.onPhoneSelect(liElement.dataset.id);
  
  */