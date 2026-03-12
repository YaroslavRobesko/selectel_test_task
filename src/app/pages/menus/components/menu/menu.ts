import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../types/types';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @Input() items: Item[] = [];
  @Input() menuName!: string;
  @Input() activeItems: Item[] = [];
  @Output() itemsChanged = new EventEmitter<Item[]>();

  isItemActive(itemName: string): boolean {
    return this.activeItems.some((item) => item.name === itemName);
  }

  handleChange(event: any) {
    let updatedItems: Item[];

    if (event.target.checked) {
      updatedItems = [
        ...this.activeItems,
        { name: event.target.name, value: Number(event.target.value) },
      ];
    } else {
      updatedItems = this.activeItems.filter((item) => item.name !== event.target.name);
    }

    this.itemsChanged.emit(updatedItems);
  }
}
