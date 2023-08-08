import { Injectable } from '@angular/core';
import { Food } from 'src/app/share/models/food';
import { Tag } from 'src/app/share/models/tag';

@Injectable({
  providedIn: 'root'
})



export class FoodService {
  getAllByTag(tag:string): Food[] {
    if(tag==='All') return this.getAll();

    const arr = this.getAll();
    return arr.filter(s=>{
      if(!s.tags) return s;
      return s.tags?.indexOf(tag)>-1})
  }

  constructor() { }

  getAllTags():Tag[] {
    let rawTags = [...this.getAll().map(s=>s.tags)].flat();
    const arr:Tag[] = [];

    for(const tag of rawTags){
      if(!tag) continue;
      const index = arr.findIndex(s=>s.name===tag);
      if(index>-1) arr[index].count++;
      else arr.push({name:tag, count:1})
    }
    console.log(arr);
    arr.push({name:"All",count:this.getAll().length});
    arr.sort((a, b) => (a.name > b.name) ? 1 : -1)

    return arr;
  }
  searchFood(term:string){
    return this.getAll()
        .filter(s=>
          s.name.toLocaleLowerCase()
          .includes(term.toLocaleLowerCase()) )

      }

  getAll():Food[]{
    return [
      // '/assets/foods/food-1.jpg',
      // '/assets/foods/food-2.jpg',
      // '/assets/foods/food-3.jpg',
      // '/assets/foods/food-4.jpg',
      // '/assets/foods/food-5.jpg',
      // '/assets/foods/food-6.jpg',
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
