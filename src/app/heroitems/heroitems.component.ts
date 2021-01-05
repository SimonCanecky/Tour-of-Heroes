import { Component, OnInit, Input } from '@angular/core';
import { Heroitem } from '../heroitem';
import { HEROITEMS } from '../mock-heroitems';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroitems',
  templateUrl: './heroitems.component.html',
  styleUrls: ['./heroitems.component.css']
})

export class HeroitemsComponent implements OnInit {

  @Input() heroitem: Heroitem;

  heroitems = HEROITEMS;
  selectedHeroitem: Heroitem;

  constructor(/*private route: ActivatedRoute*/) { }

  ngOnInit() {
  }

  onSelect(heroitem: Heroitem): void {
    this.selectedHeroitem = heroitem;
  }
}