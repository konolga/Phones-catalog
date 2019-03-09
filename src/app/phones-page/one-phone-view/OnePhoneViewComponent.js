import { BaseComponent } from '../../common/components/base/base.component.js';
import template from './OnePhoneViewComponent.hbs';
import  BASE_URL from '../phones-page.service.js';

export class OnePhoneViewComponent extends BaseComponent {
 
  constructor({ element }) {
    super({ element });

    //using delegate
    this.on('click', '.go-back', () => {
      this.emit('back');
    });
    this.on('click', '.add-to-cart', (event) => {
      this.emit('add', this._phone.id);
    });
    this.on('click', '.image-link', (event) => {
      this._currentImage = event.delegateTarget.src;
      this._render();
    });
 
  



/*  
    this.element = element;
    this._render();
    this.onBackSelect = onBackSelect;
    this.onAddSelect = onAddSelect;
    this.onLargeViewSelect= onLargeViewSelect; 
    this.phone = phone;
    this._element.addEventListener('click', this._handleClick.bind(this));
    this.isVisible();
*/

    
  }

  show(phone) {
    this.phone = phone;
    this._currentImage = `https://konolga.github.io/Phones-catalog/tree/gh-pages/src/assets/img${phone.images[0]}`;
    this._render();
    super.show();
   
  }


      _render() {

        this._element.innerHTML =  template({phone: this.phone, 
          baseUrl: this.baseUrl, currentImage: this._currentImage})
    }
}


//old code
  
/*   isVisible(status, phone){
    if(status)
    {
      this._phone = phone;
      this._currentImage = `assets/${this._phone.images[0]}`;
      this._render();
      super.show();
    }
    else{
      super.hide();
    }
  }


    _handleClick (event){
    const backButton = this._element.querySelector('#Btn-back');
    const addButton = this._element.querySelector('#Btn-add');
    const imgElement = this._element.querySelector('.phone-thumbs img');

    if (event.target === backButton) this.onBackSelect();
    if (event.target === addButton) this.onAddSelect();
    if (event.target === imgElement) this.onLargeViewSelect();

        onLargeViewSelect(){
      this.element.querySelector('.phone').src = imgElement.src;
    }
      
    }
   */
