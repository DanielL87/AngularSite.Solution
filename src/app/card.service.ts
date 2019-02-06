import { Injectable } from '@angular/core';
import { Card } from './Card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CardService {
  albums: FirebaseListObservable<any[]>;

}