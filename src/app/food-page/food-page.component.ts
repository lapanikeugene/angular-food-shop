import { Component } from '@angular/core';
import { Food } from '../share/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
 food!:Food|undefined;

 constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService){
  activatedRoute.params.subscribe((params)=>{
    if(params['id'])
    this.food =foodService.getFoodById(Number(params['id']));

  })
 }
}
