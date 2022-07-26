import { Component, Input } from '@angular/core';
import { Personaje } from 'src/app/interface/Personajes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
@Input() personajes!:Personaje ;
  constructor() {
   }
}
