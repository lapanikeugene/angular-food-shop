import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  @Input() stars:number=0;
  starsArray: any[] =[]

  constructor(){
   
  }
  ngOnInit(){
    console.log(this.stars);
    if(this.stars)
    this.starsArray =  new Array(5).fill(0);
  }

}
