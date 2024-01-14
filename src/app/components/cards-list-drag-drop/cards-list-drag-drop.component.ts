import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cards-list-drag-drop',
  templateUrl: './cards-list-drag-drop.component.html',
  styleUrls: ['./cards-list-drag-drop.component.scss'],
})
export class CardsListDragDropComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') modal;
  @Input() listName: string;
  @Input() listData: Array<{
    pic: string;
    name: string;
    nationality: string;
    role: string;
  }>;
  @Input() listColor: string;
  isModalOpen = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.modal.onDidDismiss().then(() => {
      this.isModalOpen = false;
    });
  }

  onLongPress(event) {
    console.log('Long Pressed!', event);
    this.isModalOpen = true;
    this.modal.present();
  }

  closeModal() {
    if (this.isModalOpen) {
      this.modal.dismiss();
    }
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
