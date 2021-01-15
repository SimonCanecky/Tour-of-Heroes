import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  sortBy: string = 'Item ID';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }
  
  
  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  sort(sortBy: string) {
    this.sortBy = sortBy

    if(this.sortBy === 'Item Name')
      this.items.sort((a,b) => a.name.localeCompare(b.name));

    if(this.sortBy === 'Item ID')
      this.items.sort((a,b) => a.id > b.id ? 1 : -1);

    if(this.sortBy === 'Item Price')
      this.items.sort((a,b) => b.price > a.price ? 1 : -1);
  }
}