import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { Hero } from '../hero';
import { Heroitem } from '../heroitem';
import { HeroService } from './../hero.service';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  items: Item[];
  hero: Hero;
  heroitems: Heroitem[];

  constructor(private itemService: ItemService, private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  buyitem(item: Item, heroitem: Heroitem): void {
    if (this.hero.money >= item.price){
      this.hero.money -= item.price;
      this.hero.items.push(heroitem);
    }
  }

}