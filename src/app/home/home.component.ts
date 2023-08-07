import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../share/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]= [];
  constructor(private foodServices:FoodService){}

  ngOnInit(){
    this.foods = this.foodServices.getAll();
  }
}
