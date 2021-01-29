import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  constructor(private itemService:ItemService){}

  model = new Item(11,'Crossbow', 7);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newItem() {
    this.model = new Item(11,'', 7);
  }

  Create():void {
    this.itemService.addItem(this.model).subscribe();
 }
}
