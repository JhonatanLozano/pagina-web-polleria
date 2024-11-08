import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,IonMenuButton]
})
export class HeaderComponent {

  @Input() titulo: string = '';

  constructor() { }

}
