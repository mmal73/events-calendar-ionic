import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import MyEvent from '../../models/myEvent';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  private dbPath = '/events';

  eventsRef: AngularFireList<MyEvent> = null;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.eventsRef = db.list(this.dbPath);
  }

  addEvent(event: MyEvent): any {
    return this.eventsRef.push(event);
  }

  getAll(): AngularFireList<MyEvent> {
    return this.eventsRef;
  }

}
