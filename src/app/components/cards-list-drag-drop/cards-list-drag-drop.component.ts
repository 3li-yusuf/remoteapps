import { Component, Input, NgModule, OnInit } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cards-list-drag-drop',
  templateUrl: './cards-list-drag-drop.component.html',
  styleUrls: ['./cards-list-drag-drop.component.scss'],
})
export class CardsListDragDropComponent implements OnInit {
  @Input() listName: string;
  @Input() listData: Array<{
    pic: string;
    name: string;
    nationality: string;
    role: string;
  }>;
  @Input() listColor: string;
  constructor() {}

  ngOnInit() {}

  onLongPress(event) {
    console.log('Long Pressed!', event);
  }
  drop(
    event: CdkDragDrop<
      { pic: string; name: string; nationality: string; role: string }[]
    >
  ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
