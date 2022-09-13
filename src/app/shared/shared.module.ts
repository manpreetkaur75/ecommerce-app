import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { TitleComponent } from './components/title/title.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip'
@NgModule({
  declarations: [
    ItemQuantityComponent,
    SimplePageComponent,
    TitleComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
   ],

   exports: [
    CommonModule,
    ItemQuantityComponent,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
   
    WordWrapPipe
  ]
})
export class SharedModule { }
