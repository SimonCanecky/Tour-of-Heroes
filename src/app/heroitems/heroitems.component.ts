import { Component, OnInit } from '@angular/core';
import { Heroitem } from '../heroitem';
import { HEROITEMS } from '../mock-heroitems';

@Component({
  selector: 'app-heroitems',
  templateUrl: './heroitems.component.html',
  styleUrls: ['./heroitems.component.css']
})

export class HeroitemsComponent implements OnInit {

  heroitems = HEROITEMS;
  selectedHeroitem: Heroitem;

  constructor() { }

  ngOnInit() {
  }

  onSelect(heroitem: Heroitem): void {
    this.selectedHeroitem = heroitem;
  }
}