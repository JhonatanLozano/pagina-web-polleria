import { Component } from '@angular/core';
import { IonButton, IonRow, IonCol, IonIcon, IonGrid, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.scss'],
  standalone:true,
  imports:[
    IonButton,IonRow,IonCol,IonIcon,IonGrid,IonFooter
  ]
})
export class PiePaginaComponent  {

  constructor() { }


}
