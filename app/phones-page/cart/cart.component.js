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
  let removeBtn = document.createElement('a');
  removeBtn.class = "x-btn";
  removeBtn.innerHTML='&#x2716';
 
  itemAdded.innerHTML=name;
  list.appendChild(itemAdded);
  list.appendChild(removeBtn);
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
