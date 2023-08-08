import { cartItem } from "./cartItem";

export class cart {
    items:cartItem[] = [];

    get totalPrice():number{
        return this.items.reduce((acc,obj)=>{ return acc + obj.price},0);
    }
}