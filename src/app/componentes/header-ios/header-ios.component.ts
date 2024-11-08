import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons ,IonButton,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header-ios',
  templateUrl: './header-ios.component.html',
  styleUrls: ['./header-ios.component.scss'],
  standalone: true,
  imports:[
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,IonMenuButton,IonButtons

  ]
})
export class HeaderIosComponent  {
  @Input() titulo:string  ='';
  constructor() { }

  

}
