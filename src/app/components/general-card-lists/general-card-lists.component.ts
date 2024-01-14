import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

type MyDragDropType = CdkDragDrop<{
  pic: string;
  name: string;
  nationality: string;
  role: string;
}>;

@Component({
  selector: 'app-general-card-lists',
  templateUrl: './general-card-lists.component.html',
  styleUrls: ['./general-card-lists.component.scss'],
})
export class GeneralCardListsComponent implements OnInit {
  @Input() Lists: MyDragDropType[];
  @Input() ListsHeaders: string[];
  @Input() ListsColors: string[];

  constructor() {}

  ngOnInit() {
    console.log('GeneralCardListsComponent initialized!');
    console.log('Lists:', this.Lists);
    console.log('ListsColors:', this.ListsColors);
    console.log('ListsHeaders:', this.ListsHeaders);
  }
}
