import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private heroService:HeroService){}

  moneys = [ 25, 50, 75, 100 ];

  model = new Hero(11,'Dr IQ', this.moneys[0], 10, 7);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(11,'', 25, 10, 7,);
  }

  Create():void {
    this.heroService.addHero(this.model).subscribe();
 }
}