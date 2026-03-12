import { Component } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Item } from './types/types';

@Component({
  selector: 'app-menus',
  imports: [Menu],
  templateUrl: './menus.html',
  styleUrl: './menus.css',
})
export class Menus {
  Object = Object;

  menusObj: Record<string, Item[]> = {
    menu1: [
      { name: 'item1', value: 20 },
      { name: 'item2', value: 32 },
      { name: 'item3', value: 19 },
      { name: 'item4', value: 14 },
    ],
    menu2: [
      { name: 'item1', value: 15 },
      { name: 'item2', value: 45 },
    ],
    menu3: [
      { name: 'item1', value: 96 },
      { name: 'item2', value: 78 },
      { name: 'item3', value: 43 },
    ],
  };

  activeInputsArr: Record<string, Item[]> = {
    menu1: [],
    menu2: [],
    menu3: [],
  };

  menuName: string = 'menu1';

  changeMenu(menuName: string) {
    this.menuName = menuName;
  }

  onItemsChange(items: Item[]) {
    this.activeInputsArr[this.menuName] = items;
  }
}
