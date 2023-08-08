import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { cart } from '../share/models/cart';
import { cartItem } from '../share/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:cart

  constructor(private cartService:CartService){
    this.setCart();
  }

  setCart(){
   this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:cartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();

  }

  changeQuantity(cartItem:cartItem, amount:string){
    console.log(cartItem, amount)
    this.cartService.changeQuantity(cartItem.food.id,parseInt(amount));
    this.setCart();


  }
}
