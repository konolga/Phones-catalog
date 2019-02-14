import { BaseComponent } from '../../common/components/base/base.component.js';

export class CartComponent extends BaseComponent{
  constructor({element}){
    super({ element });

    this.element = element;
    this._render();

    this._element.addEventListener('click', this._handleClick.bind(this));
    
  }


addToCart(name){
  const list = this._element.querySelector('ul');
  let itemAdded = document.createElement('li');
  let removeBtn = document.createElement('a');
  removeBtn.className  = "x-btn";
  removeBtn.innerHTML='&#x2716';
 
  itemAdded.innerHTML=name;
  itemAdded.appendChild(removeBtn);
  list.appendChild(itemAdded);
}

_handleClick( event ) {
  const removeBtn = event.target.closest('.x-btn');
   if (event.target===removeBtn) {
    event.target.parentElement.remove();
   }
 
}



_render() {
    this.element.innerHTML = ` 
    <div class="row">
    this is CartComponent
    <!--Sidebar-->

      <section>
        <p>Shopping Cart</p>
        <ul>

        </ul>
      </section>

    </div>`;
  }
}
