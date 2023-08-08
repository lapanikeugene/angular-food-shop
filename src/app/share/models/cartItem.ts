import { Food } from "./food";

export class cartItem {
    constructor(food:Food){
        this.food  = food;
      
    }
    food:Food
    number:number=1;

    get price():number{
        return this.food.price*this.number;
    }
}