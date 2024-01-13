import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CardsListDragDropComponent } from '../components/cards-list-drag-drop/cards-list-drag-drop.component';
import { GeneralCardListsComponent } from '../components/general-card-lists/general-card-lists.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DragDropModule,
    ScrollingModule,
  ],
  declarations: [
    HomePage,
    CardsListDragDropComponent,
    GeneralCardListsComponent,
  ],
})
export class HomePageModule {}
