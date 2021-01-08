import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import MyEvent from '../../models/myEvent';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements OnInit {

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  event: MyEvent = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: false
  };
  selectedDate: Date; // Pased to modal from openCalModal method in home page
  eventFormValid = false;

  constructor( private modalCtrl: ModalController ) {}

  ngOnInit() {
    // Set selectedDate
    this.event.startTime = this.selectedDate.toISOString();
    let newEndTime = new Date( Date.UTC( this.selectedDate.getUTCFullYear(), this.selectedDate.getUTCMonth(), this.selectedDate.getUTCDate() + 1, this.selectedDate.getUTCHours() ) );
    this.event.endTime = newEndTime.toISOString();
  }

  save() {
    this.modalCtrl.dismiss( { event: this.event } )
  }

  onTimeSelected(ev) {
    this.event.startTime = new Date( ev.selectedTime );
  }

  close() {
    this.modalCtrl.dismiss();
  }
  
  setFormValid( eventForm: NgForm ){
    this.eventFormValid = eventForm.valid;
  }
}
