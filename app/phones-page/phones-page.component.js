import { PhonesCatalogComponent } from './phone-catalog/phone-catalog.component.js';
import { OnePhoneViewComponent } from "./one-phone-view/OnePhoneViewComponent.js";
import { PhonesPageService } from './phones-page.service.js';
import { CartComponent }  from './cart/cart.component.js';

export class PhonesPageComponent 
{
  constructor({ element }) {
    this.element = element;
    this._render();

    this._phoneService = new PhonesPageService();

    this._phoneCatalog = new PhonesCatalogComponent({
      element: this.element.querySelector('#catalog'),
      phones: this._phoneService.getAllPhones(),
      onPhoneSelect: (phoneId)=>{
        const phoneDetails = this._phoneService.getPhonesById(phoneId);
        this._phoneCatalog.hide();
        this._phoneViewer.isVisible(true,phoneDetails);
      }
      
    });
   

    
    this._phoneViewer = new OnePhoneViewComponent({
      element: this.element.querySelector('#item'),
      onBackSelect: () =>{
        this._phoneViewer.isVisible(false);
        this._phoneCatalog.show();
      },
      onAddSelect:(phoneId)=>{
//TODO: add phone to cardview component

const phoneShortDetails = this._phoneService.getPhonesById(phoneId).name;3
this._cartViewer.addToCart(phoneShortDetails);

      }
    });

this._cartViewer = new CartComponent({
    element: this.element.querySelector('#cart')

  });


  }
 

  _render() {
    this.element.innerHTML = ` <div class="row">
this is PhonesPageComponent
    <!--Sidebar-->
    <div class="col-md-2">
      <section>
        <p>
          Search:
          <input>
        </p>

        <p>
          Sort by:
          <select>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </section>

    <!--Main content-->
    <div class="col-md-10" >
    <div id="cart"></div>
 <div id="catalog"></div>
 <div id="item"></div>

    </div>
  </div>`;
  }
}