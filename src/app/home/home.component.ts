import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../share/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]= [];
  constructor(private foodServices:FoodService, private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodServices.getAll()
        .filter(s=>
          s.name.toLocaleLowerCase()
          .includes(params['searchTerm'].toLocaleLowerCase()) )

      }else
      this.foods = this.foodServices.getAll();

    }); // check changes in route.
  }
}
