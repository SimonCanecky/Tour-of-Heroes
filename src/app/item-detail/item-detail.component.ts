import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
