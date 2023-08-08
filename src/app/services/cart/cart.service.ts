import { Injectable } from '@angular/core';
import { cart } from 'src/app/share/models/cart';
import { cartItem } from 'src/app/share/models/cartItem';
import { Food } from 'src/app/share/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart = new cart();

  addToCart(food:Food){
    let index = this.cart.items.findIndex(s=>s.food.id === food.id);
    if(index > -1 )
      this.changeQuantity(food.id,this.cart.items[index].number+1);
    else
      this.cart.items.push(new cartItem(food));

  }
  
  removeFromCart(id:number){
   this.cart.items= this.cart.items.filter(s=>s.food.id!==id);
  }

  changeQuantity(foodId:number,amount:number){
    console.log('trying to change amount of items ',foodId,amount);

   let cartItem= this.cart.items.find(s=>s.food.id===foodId);
   console.log(this.cart.items);
   console.log(cartItem);
   if(!cartItem) return;
   cartItem.number = amount;
  console.log(amount);
  }

  getCart():cart{
    return this.cart;
  }
}
