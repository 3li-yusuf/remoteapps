import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
  ];
  basket = [
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
  ];
  stock = [
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
  ];
  grocery = [
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
  ];
  finalized = [
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
    {
      pic: '../../assets/pictures/Image.jpg',
      name: 'Khalil Alrashed',
      nationality: 'Bahraini',
      role: 'HR Manager',
    },
  ];

  onLongPress(event) {
    console.log('Long Pressed!', event);
  }

  tap() {
    console.log('tap');
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
