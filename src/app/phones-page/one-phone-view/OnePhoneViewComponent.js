import { BaseComponent } from '../../common/components/base/base.component.js';
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
