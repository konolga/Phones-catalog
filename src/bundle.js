/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_phones_page_phones_page_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


new _app_phones_page_phones_page_component_js__WEBPACK_IMPORTED_MODULE_0__["PhonesPageComponent"]({
  element: document.querySelector('#root')
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesPageComponent", function() { return PhonesPageComponent; });
/* harmony import */ var _phone_catalog_phone_catalog_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _one_phone_view_OnePhoneViewComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _phones_page_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _cart_cart_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _Filters_view_filter_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);







class PhonesPageComponent 
{
  constructor({ element }) {
    this.element = element;
    this.state = { text: '', orderBy: 'name' };
    this._render();

    this._phoneService = new _phones_page_service_js__WEBPACK_IMPORTED_MODULE_2__["PhonesPageService"]();
    this._initOnePhoneView();
    this._initCatalog();
    this._initCart();
    this._initFilter();
  }


_initCatalog(){
    this._phoneCatalog = new _phone_catalog_phone_catalog_component_js__WEBPACK_IMPORTED_MODULE_0__["PhonesCatalogComponent"]({
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
  this._phoneViewer = new _one_phone_view_OnePhoneViewComponent_js__WEBPACK_IMPORTED_MODULE_1__["OnePhoneViewComponent"]({
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
    this._shoppingCart = new _cart_cart_component_js__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]({
    element: document.querySelector('#cart')
    });
}     



_initFilter() {
  this._filter = new _Filters_view_filter_component_js__WEBPACK_IMPORTED_MODULE_4__["FilterComponent"]({
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesCatalogComponent", function() { return PhonesCatalogComponent; });
/* harmony import */ var _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class PhonesCatalogComponent extends _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
class BaseComponent {
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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnePhoneViewComponent", function() { return OnePhoneViewComponent; });
/* harmony import */ var _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

class OnePhoneViewComponent extends _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
 
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
    this._phone = phone;
    this._currentImage = `assets/${this._phone.images[0]}`;
    this._render();
    super.show();
  }


      _render() {

        this._element.innerHTML = `
        <img class="phone" src="${this._currentImage}">

    <button class="go-back">Back</button>
    <button class="add-to-cart">Add to cart</button>

    <h1>${this._phone.name}</h1>
    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
    ${this._phone.images.reduce((item, nextImage) => {
    return ` ${item}<li>
    <img class="image-link"  src='assets/${nextImage}'">
    </li>
    `;
    }, '')}
    </ul>




    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>${this._phone.availability}</dt>
          <dd></dd>
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${this._phone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${this._phone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${this._phone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
      <span>Storage and Memory</span>
      <dl>
        <dt>RAM</dt>
        <dd>${this._phone.storage.ram}</dd>
        <dt>Internal Storage</dt>
        <dd>${this._phone.storage.flash}</dd>
      </dl>
    </li>
    <li>
      <span>Connectivity</span>
      <dl>
        <dt>Network Support</dt>
        <dd></dd>
        <dt>WiFi</dt>
        <dd>${this._phone.connectivity.wifi}</dd>
        <dt>Bluetooth</dt>
        <dd>${this._phone.connectivity.bluetooth}</dd>
        <dt>Infrared</dt>
        <dd>${Boolean(this._phone.connectivity.infrared) ? '✓' : '✘' }</dd>
        <dt>GPS</dt>
        <dd>${Boolean(this._phone.connectivity.gps) ? '✓' : '✘'}</dd>
      </dl>
    </li>
    <li>
      <span>Android</span>
      <dl>
        <dt>OS Version</dt>
        <dd>${this._phone.android.os}</dd>
        <dt>UI</dt>
        <dd>${this._phone.android.ui}</dd>
      </dl>
    </li>
    <li>
      <span>Size and Weight</span>
      <dl>
        <dt>Dimensions</dt>
        ${this._phone.sizeAndWeight.dimensions.map((item)=> `<dd>${item}</dd>`).join('')}
        <dt>Weight</dt>
        <dd>${this._phone.sizeAndWeight.weight}</dd>
      </dl>
    </li>
    <li>
      <span>Display</span>
      <dl>
        <dt>Screen size</dt>
        <dd>${this._phone.display.screenSize}</dd>
        <dt>Screen resolution</dt>
        <dd>${this._phone.display.screenResolution}</dd>
        <dt>Touch screen</dt>
        <dd>${Boolean(this._phone.display.touchScreen) ? '✓' : '✘'}</dd>
      </dl>
    </li>
    <li>
      <span>Hardware</span>
      <dl>
        <dt>CPU</dt>
        <dd>${this._phone.hardware.cpu}</dd>
        <dt>USB</dt>
        <dd>${this._phone.hardware.usb}</dd>
        <dt>Audio / headphone jack</dt>
        <dd>${this._phone.hardware.audioJack}</dd>
        <dt>FM Radio</dt>
        <dd>${Boolean(this._phone.hardware.fmRadio) ? '✓' : '✘'}</dd>
        <dt>Accelerometer</dt>
        <dd>${Boolean(this._phone.hardware.accelerometer) ? '✓' : '✘'}✓</dd>
      </dl>
    </li>
    <li>
      <span>Camera</span>
      <dl>
        <dt>Primary</dt>
        <dd>${this._phone.camera.primary}</dd>
        <dt>Features</dt>
        <dd>${this._phone.camera.features}</dd>
      </dl>
    </li>
    <li>
      <span>Additional Features</span>
      <dd>${this._phone.additionalFeatures}</dd>
    </li>
  </ul>
    `;
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesPageService", function() { return PhonesPageService; });

const BASE_URL = 'https://konolga.github.io/phones-js-10122018/';

class PhonesPageService {

  async  getAllPhones({ text, orderBy }) {
    try{
    //we want to use promise in case data has to be pulled everytime, we want to make it async
   // return new Promise((res) => {
    const phones = await fetch(`${BASE_URL}/mocked-data/phones/phones.json`)
      .then((res) => res.json());
    const searchedPhones = this._searchByText(phones, text);
    const sortedPhones = this._sort(searchedPhones, orderBy);
    return sortedPhones;
    }
    catch (err) {
      console.log(err);
    }
    }


  _searchByText(phones, searchText){
    if(!searchText){
      return phones;
    }
    return phones.filter (phone =>{
      //String#toLowerCase for getting comparable values,
      //String#includes for checking two string, if one contains the other.
      return phone.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  _sort(phones, orderBy){

    return [...phones] //spread operator
    .sort ((phone1, phone2)=>{ return phone1[orderBy]>phone2[orderBy] ? 1 : -1; });
  }

  async getPhonesById(id) {
    try{
    return await fetch(`${BASE_URL}/mocked-data/phones/${id}.json`)
    .then((res) => res.json());
    }
    catch (err) {
      console.log(err);
    }
  }



}


/* 
Fetch method:
fetch(path, method = 'GET') {
Promise ((res,rej)=>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`${BASE_URL}/mocked-data/phones/${id}.json`,  false);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      rej(`${xhr.status} ${xhr.statusText} `)
    } else {
      res(JSON.parse(xhr.responseText));
    }
  });
}); */

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class CartComponent extends _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]{
  constructor({ element }) {
    super({ element });
    this._items = {};
    this._render();
    this.on('click', '.remove', (event)=>{
     this._remove(event.delegateTarget.dataset.id);
    });
  }


  add(phoneId) {
    if(!this._items[phoneId]){
      this._items[phoneId] = 0;
    }
    this._items[phoneId] += 1;
    this._render();
  }

  _remove(phoneId) {
    this._items[phoneId] -= 1;
    if(this._items[phoneId] === 0){
     delete this._items[phoneId];
    }
    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <section >
        <p>Shopping Cart</p>
        <ul>
           ${Object.entries(this._items).reduce((html, [phoneId, quantity])=>{
             return `${html} <li>${phoneId} (${quantity})
  <button class="remove" data-id="${phoneId}">x</button>
</li>`
    },'')}
        </ul>
      </section>
    `;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

class FilterComponent extends _common_components_base_base_component_js__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
  constructor({ element }) {
    super({ element });
    this._render();

    this.on('input','.search', (event) =>{
      this.emit('text-search', event.delegateTarget.value);
    });

    this.on('change','.sort', (event) =>{
      this.emit('sorting', event.delegateTarget.value);
    });
  }

  _render() {
    this._element.innerHTML = `
      <section>
        <p>
          Search:
          <input class="search">
        </p>
        <p>
          Sort by:
          <select class="sort">
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </section>`;
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map