import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(
    private its: ItemsService,
  ) { }

  ngOnInit(): void {
    this.its.getItems().subscribe((data) => {
      this.items = data;
    })
  }

}
