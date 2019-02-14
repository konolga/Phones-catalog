import { BaseComponent } from '../../common/components/base/base.component.js';

export class PhonesCatalogComponent extends BaseComponent {
  constructor({ element, phones, onPhoneSelect, onAddSelect }) {
    super({ element });
    this.phones = phones;
    this.onPhoneSelect = onPhoneSelect;
    this.onAddSelect = onAddSelect;
    this._render();
    this._element.addEventListener('click', this._handleClick.bind(this));
  }

  _handleClick( event ) {
    const btnElement = event.target.closest('.phones__btn-buy-wrapper');
    const liElement = event.target.closest('.thumbnail');
   
    if (event.target===btnElement) this.onAddSelect(liElement.dataset.id);
     if(event.target===liElement) this.onPhoneSelect(liElement.dataset.id);
   
  }

  _render() {
    this._element.innerHTML = `
    this is PhonesCatalogComponent
          <ul class="phones">
          ${this.phones.reduce((html, phone) => {
      return `${html}     <li class="thumbnail" data-id=${phone.id}>
          <a href="#!/phones/${phone.id}" class="thumb">
            <img alt=${phone.id} src=${`assets/${phone.imageUrl}`}>
          </a>
          <button class="phones__btn-buy-wrapper">
              Add
          </button>
          <a href="#!/phones/${phone.id}">${phone.name}</a>
          <p>${phone.snippet}</p>
        </li>`
    }, '')}
    
   
      </ul>
    `
  }
}