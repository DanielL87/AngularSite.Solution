import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  cards: any = [];

  constructor() { }

  ngOnInit() {
  }

  cardInfo(name){
   let card = new Card(name);
   this.cards.push(card);
  }

}
