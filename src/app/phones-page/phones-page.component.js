import { PhonesCatalogComponent } from './phone-catalog/phone-catalog.component.js';
import { OnePhoneViewComponent } from './one-phone-view/OnePhoneViewComponent.js';
import { PhonesPageService } from './phones-page.service.js';
import { CartComponent }  from './cart/cart.component.js';
import { FilterComponent } from './Filters-view/filter-component.js';
import './index.css';

export class PhonesPageComponent 
{
  constructor({ element }) {
    this.element = element;
    this.state = { text: '', orderBy: 'name' };
    this._render();

    this._phoneService = new PhonesPageService();
    this._initOnePhoneView();
    this._initCatalog();
    this._initCart();
    this._initFilter();
  }


_initCatalog(){
    this._phoneCatalog = new PhonesCatalogComponent({
      element: this.element.querySelector('#catalog')
    });
    this._showFilteredPhones();
    this._phoneCatalog.subscribe('phone-select', async (phoneId) => {
      try {
              //promise
        const phone = await this._phoneService
        .getPhonesById(phoneId)
        this._phoneCatalog.hide();
        this._phoneViewer.show(phone);
      }
      catch (err) {
        console.log(err);
      }
      });

      this._phoneCatalog.subscribe('add',(phoneId)=>{
        this._shoppingCart.add(phoneId);
      });

   

/*      onPhoneSelect: (phoneId)=>{
        const phoneDetails = this._phoneService.getPhonesById(phoneId);
        this._phoneCatalog.hide();
        this._phoneViewer.isVisible(true,phoneDetails);
      },

        onAddSelect: (phoneId)=>{
        const phoneShortDetails = this._phoneService.getPhonesById(phoneId).name;
        this._cartViewer.addToCart(phoneShortDetails);

       } */
}


_initOnePhoneView(){ 
  this._phoneViewer = new OnePhoneViewComponent({
  element: this.element.querySelector('#item')
}); 


  this._phoneViewer.subscribe('back', () => {
    this._showFilteredPhones();
  this._phoneViewer.hide();
    });

    this._phoneViewer.subscribe('add',(phoneId)=>{
    this._shoppingCart.add(phoneId);
    });


  }    
/*   //back to catalog
  onBackSelect: () =>{
    this._phoneViewer.show();
    this._phoneCatalog.hide();
  },
  //add to catalog
  onAddSelect:(phoneId)=>{
  const phoneShortDetails = this._phoneService.getPhonesById(phoneId).name;
  this._cartViewer.addToCart(phoneShortDetails);}
*/


_initCart(){
    this._shoppingCart = new CartComponent({
    element: document.querySelector('#cart')
    });
}     



_initFilter() {
  this._filter = new FilterComponent({
    element: document.querySelector('#filter')
  });

   this._filter.subscribe('text-search', (text) => {
    this.state = {...this.state, text };
    this._showFilteredPhones();
  });

  this._filter.subscribe('sorting', (type) => {
    this.state = { ...this.state, orderBy: type };
    this._showFilteredPhones();
  });
  
}


_showFilteredPhones(){
  const filteredPhonesPromise = this._phoneService.getAllPhones(this.state);
    // (filteredPhones) => {
    //   this._phoneCatalog.show(filteredPhones);
    // }
  
  filteredPhonesPromise
    .then(filteredPhones => {
      this._phoneCatalog.show(filteredPhones);
    })
    .catch((err) => {
      console.log(err);
    });
}
//render._phones...

  _render() {
    this.element.innerHTML = ` <div class="row">

    <!--Sidebar-->

    <div id="filter"></div>

    <!--Main content-->

    <div class="col-md-4">

    <div id="cart"></div>
    </div>

    <div class="col-md-8">
 <div id="catalog"></div>
 <div id="item"></div>
 </div>`;

    }  
}

