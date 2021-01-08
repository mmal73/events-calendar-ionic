import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';

import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common//locales/es-MX';
registerLocaleData(localeMX);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [HomePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ]
})
export class HomePageModule { }
