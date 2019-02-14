import { BaseComponent } from '../../common/components/base/base.component.js';

export class CartComponent extends BaseComponent{
  constructor({element}){
    super({ element });

    this.element = element;
    this._render();

  }

addToCart(name){
  const list = this._element.querySelector('ul');
  let itemAdded = document.createElement('li');
  itemAdded.innerHTML=name;
  list.appendChild(itemAdded);
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
