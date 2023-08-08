import { Component } from '@angular/core';
import { Tag } from '../share/models/tag';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
 tags:Tag[]= [];
 activeTag:string = "";
 constructor(private foodService:FoodService, private route:ActivatedRoute){}

 ngOnInit(){
this.tags = this.foodService.getAllTags();
this.route.params.subscribe(params => {
  if(params['tag'])
    this.activeTag =  params['tag']
})

}


}
